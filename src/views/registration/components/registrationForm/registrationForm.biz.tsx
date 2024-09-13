import { apiBase } from "@core/utils/axios";
import { MenuItem } from "@mui/material";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { TregistrationForm } from "@views/registration/registration.types";
import axios from "axios";
import { useEffect, useMemo } from "react";
import { useFormContext } from "react-hook-form";
import { TmyForm } from "./registrationForm.types";

const useRegistrationForm = () => {
  const { control, handleSubmit, watch } = useFormContext<TregistrationForm>();
  const queryClient = useQueryClient();

  const selectedCity = watch("province");
  const selectedInsurance = watch("insurance_branch");
  const agencyType = watch("agency_type");

  const { data: provinces } = useQuery({
    queryKey: ["provice-list"],
    queryFn: (): Promise<Array<{ name: string; id: number }>> =>
      apiBase.get("/provinces_wop/").then((res) => res.data),
  });

  const { data: counties } = useQuery({
    queryKey: ["counties-list"],
    queryFn: (): Promise<Array<{ name: string; id: number }>> =>
      apiBase
        .get("/counties_wop/", {
          params: {
            province: selectedCity,
          },
        })
        .then((res) => res.data),
    enabled: !!selectedCity,
  });

  const { data: insurances } = useQuery({
    queryKey: ["insurance-branch"],
    queryFn: (): Promise<Array<{ name: string; id: number }>> =>
      axios
        .get(
          "https://stage-api.sanaap.co/api/v2/app/selection_item/insurance_branch/wop_list/",
          {
            params: {
              name: selectedInsurance,
              insurance: "DEY",
              province: selectedCity,
            },
          }
        )
        .then((res) => res.data.response),
    enabled: !!selectedCity && !!selectedInsurance,
  });

  const provincesList = useMemo(() => {
    return provinces?.map(({ name, id }) => {
      return (
        <MenuItem key={id} value={String(id)}>
          {name}
        </MenuItem>
      );
    });
  }, [provinces]);

  const countiesList = useMemo(() => {
    return counties?.map(({ id, name }) => {
      return (
        <MenuItem key={id} value={String(id)}>
          {name}
        </MenuItem>
      );
    });
  }, [counties]);

  const insuranceBranchOptions = useMemo(() => {
    return insurances?.map(({ name, id }) => {
      return { title: name, id };
    });
  }, [insurances]);

  useEffect(() => {
    // on provice change, remove the current county
    if (selectedCity) {
      queryClient.invalidateQueries({ queryKey: ["counties-list"] });
    }
  }, [queryClient, selectedCity]);

  const myForm: Array<TmyForm> = [
    {
      name: "agent_code",
      label: "کد نمایندگی",
      placeholder: "1234",
      type: "input",
      flip: true,
    },
    {
      name: "province",
      label: "استان",
      render: provincesList,
      type: "select",
    },
    {
      name: "county",
      label: "شهر",
      render: countiesList,
      type: "select",
    },
    {
      name: "address",
      label: "آدرس",
      placeholder: "لطفا آدرس خود را وارد کنید",
      type: "multiLine",
    },
    {
      name: "insurance_branch",
      label: "شعبه بیمه",
      type: "input",
    },
    {
      name: "phone",
      label: "تلفن ثابت",
      type: "input",
      flip: true,
    },
    {
      name: "city_code",
      label: "کد شهر",
      type: "input",
      flip: true,
    },
    {
      name: "agency_type",
      label: "نوع نمایندگی",
      type: "radio",
    },
  ];

  return {
    control,
    handleSubmit,
    agencyType,
    myForm,
    insuranceBranchOptions,
    selectedCity,
  };
};

export default useRegistrationForm;
