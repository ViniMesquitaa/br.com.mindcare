import { Check, Circle, ClockAlert, ClipboardPlus } from "lucide-react";
import { Tabs } from "../../components/Tabs";
import { UserForm } from "../../components/UserForm";
import { DEFAULT_VALUES, MOCK_USERS } from "../../utils/constants";
import { generateDate } from "../../utils/generateBirthDate";

import { useMemo, useState } from "react";
import Table from "../../components/Table";
import "./styles.css";

export function PacientProfile() {
  const [prescription, setPrescription] = useState();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPrescription(file);
      console.log(prescription);
    }
  };

  const COLUMNS = [
    { name: "professionalName", label: "Nome do profissional" },
    { name: "sessionDate", label: "Data da sessão" },
    { name: "status", label: "Status" },
    { name: "action", label: "Ação" },
  ];

  const mock = Array.from({ length: 5 }, (_, index) => ({
    id: index + 1,
    professionalName: `Jonh Doe ${index + 1}`,
    sessionDate: generateDate(),
    status: index % 2 === 0 ? "Confirmado" : "Pendente",
  }));

  const loggedUser = MOCK_USERS[3];

  const ROWS = useMemo(() => {
    return (
      mock?.map((data) => ({
        professionalName: data?.professionalName,
        sessionDate: data?.sessionDate,
        status: (
          <span
            className={`pacient-profile_status ${
              data?.status === "Confirmado" ? "confirmed" : "pending"
            }`}
          >
            <Circle
              strokeWidth={0}
              fill={data?.status === "Confirmado" ? "green" : "orange"}
              size="10"
            />
            {data?.status}
          </span>
        ),
        action:
          loggedUser?.tipoUsuario === "4" ? (
            <label htmlFor="file" className="pacient-profile_file-label">
              <ClipboardPlus className="pacient-profile_prescription-icon" />
              <input
                id="file"
                name="file"
                type="file"
                className="pacient-profile_file-input"
                onChange={handleFileChange}
              />
            </label>
          ) : data?.status === "Confirmado" ? (
            <div className="pacient-profile_actions_container">
              <Check color="green" className="pacient-profile_action" />
              <ClipboardPlus
                className="pacient-profile_prescription-icon"
                onClick={() => console.log("receita baixada")}
              />
            </div>
          ) : (
            <div className="pacient-profile_actions_container">
              <ClockAlert
                color="orange"
                className="pacient-profile_action"
                onClick={() => console.log("Sessão confirmada")}
              />
              <ClipboardPlus
                className="pacient-profile_prescription-icon"
                onClick={() => console.log("receita baixada")}
              />
            </div>
          ),
      })) || []
    );
  }, [mock, loggedUser]);

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
              name: "Anamnese",
              form: <div className="pacient-profile_tab_content">Teste</div>,
            },
            {
              name: "Histórico",
              form: (
                <div className="pacient-profile_tab_content">
                  <div className="pacient-profile_table">
                    <Table columns={COLUMNS} rows={ROWS} />
                  </div>
                </div>
              ),
            },
          ]}
        />
      </div>
    </div>
  );
}
