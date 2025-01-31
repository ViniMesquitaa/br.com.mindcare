import { Tabs } from "../../components/Tabs";
import { UserForm } from "../../components/UserForm";
import { DEFAULT_VALUES } from "../../utils/constants";

export function ProfessionalProfile() {
  return (
    <div className="pacient-profile_container">
      <div className="pacient-profile_content">
        <Tabs
          tabs={[
            {
              name: "Dados Gerais",
              form: (
                <div className="pacient-profile_tab_content">
                  <UserForm defaultValues={DEFAULT_VALUES} />
                </div>
              ),
            },
            {
              name: "Cadastro de Profissional.",
              form: <div className="pacient-profile_tab_content"></div>,
            },
            {
              name: "Horários",
              form: <div className="pacient-profile_tab_content"></div>,
            },
          ]}
        />
      </div>
    </div>
  );
}
