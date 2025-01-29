import React from "react";
import "./styles.css";



const PatientRegistration = () => {

    return(
        <>
        <main className="register-patient-main">
            <div className="register-patient-container">
                <form className="form-register-patient">
                    <div className="input-register">
                        <label htmlFor="queixa-principal">Queixa Principal </label>
                        <input type="text" id="queixa-principal" name="queixa-principal" placeholder="Ex.: Dor de cabeça, Tremores..."></input>
                    </div>

                    <div className="input-register">
                        <label htmlFor="alergias-medicamentosas">Alergias Medicamentosas</label>
                        <input type="text" id="alergias-medicamentosas" name="alergias-medicamentosas" placeholder="Ex.: Dramin, dipirona..."></input>
                    </div>

                    <div className="input-register">
                        <label htmlFor="historico-familiar">Histórico Familiar</label>
                        <input type="text" id="historico-familiar" name="historico-familiar" placeholder="Ex.: Tios com histórico de alcoolismo..."></input>
                    </div>

                    <div className="input-register">
                        <label htmlFor="historico-psiquiatrico">Histórico Psiquiátrico</label>
                        <select name="historico-psiquiatrico" id="historico-psiquiatrico">
                            <option value="" disabled selected> Selecione </option>
                            <optgroup label="Transtornos de Ansiedade"> 
                                <option value="ansiedade"> Transtorno de Pânico </option>
                                <option value="fobia-social"> Fobia Social </option>
                                <option value="transtorno-ansiedade-generalizada"> Transtorno de Ansiedade Generalizada </option>
                            </optgroup>

                            <optgroup label="Transtornos de Humor"> 
                                <option value="ansiedade"> Transtorno Bipolar </option>
                                <option value="depressao"> Depressão </option>
                                <option value="distimia"> Distimia </option>
                            </optgroup>

                            <optgroup label="Transtornos do Sono"> 
                                <option value="apneia-dono"> Apneia do Sono </option>
                                <option value="narcolepsia"> Narcolepsia </option>
                            </optgroup>
                        </select>
                    </div>
                    
                    <div className="input-register">
                        <label htmlFor="expectativas-terapia"> Expectativas da Terapia </label>
                        <input type="text" id="expectativas-terapia" name="expectativas-terapia" placeholder="Ex.: Aprender a lidar com a ansiedade..."></input>
                    </div>

                    <div className="button-register-patient">
                        <button className="submit-button-register-patient" type="submit"> Cadastre-se</button>
                    </div>

                </form>
            </div>
        </main>
        </>
    );
}

export default PatientRegistration;