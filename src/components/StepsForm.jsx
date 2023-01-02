import { useState } from "react";
import { Multiselect } from "react-widgets/cjs";
import Loading from "./Loading";

function StepsForm() {
  const [loading, setLoading] = useState(false);
  const [controllerStep, setControllerStep] = useState(0);
  const [progressStep, setProgressStep] = useState(0);
  const [brand, setBrand] = useState([]);
  const [brandLogin, setBrandLogin] = useState([]);
  const [roofHeight, setRoofHeight] = useState(false);
  const [check, setCheck] = useState(false);
  const [requestForm, setRequestForm] = useState({
    stepTechnical: {
      inverterNumbers: 0,
      wifi: "",
      access: [],
    },
    stepComplementaryData: {
      name: "",
      cpf_cnpj: "",
      address: "",
      cep: "",
      numberModules: "",
      kwp: "",
      systemType: "",
      powerPlantType: "",
      roofHeight: "",
    },
  });

  //   CONTROLE DOS PASSO A PASSO DO FORM
  function handleSteps() {
    switch (controllerStep) {
      case 0:
        return (
          <div className="container">
            <h5 className="text-dark mt-1">Dados Pessoais</h5>
            <div className="row p-2">
              <div className="col-6">
                <label className="form-label">Nome completo</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder="Nome completo"
                />
              </div>
              <div className="col-6">
                <label className="form-label">E-mail</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <div className="row p-2">
              <div className="col-6">
                <label className="form-label">Telefone</label>
                <input
                  type="text"
                  className="form-control"
                  name="phone"
                  placeholder="+55 00 99999-9999"
                />
              </div>
              <div className="col-6">
                <label className="form-label">Cidade/Estado</label>
                <input
                  type="text"
                  className="form-control"
                  name="city"
                  placeholder="Cidade/Estado"
                />
              </div>
            </div>
          </div>
        );
      case 1:
        return (
          <div className="container pre-scrollable">
            <h5 className="text-dark mt-1">Dados Técnico</h5>

            {!check ? (
              <>
                {!loading ? (
                  <>
                    <div className="row p-2">
                      <div className="col-12">
                        <label className="form-label">Marca do Inversor</label>
                        <Multiselect
                          data={[
                            "ApSystems",
                            "Aurora",
                            "Canadian",
                            "Foxess",
                            "Fronius",
                            "Fusion",
                            "GoodWe",
                            "Growatt",
                            "Hoymiles",
                            "Solarman",
                            "Isolar",
                            "SolarView",
                            "Solarz",
                            "Solis",
                          ]}
                          placeholder="Seleciona a marca do inversor"
                          name="brand"
                          onChange={(item) => setBrand(item)}
                        />
                      </div>
                    </div>
                    <div className="row p-2">
                      <div className="col-6">
                        <label className="form-label">Nº Inversor</label>
                        <input
                          type="text"
                          className="form-control"
                          name="inverterNumbers"
                          placeholder="Nº Inversor"
                          onChange={(evt) => handleChange(evt, "stepTechnical")}
                        />
                      </div>
                      <div className="col-6">
                        <p className="form-label">Possui internet Wi-Fi?</p>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="wifi"
                            value="sim"
                            onChange={(evt) =>
                              handleChange(evt, "stepTechnical")
                            }
                          />
                          <label className="form-check-label">Sim</label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="wifi"
                            value="nao"
                            onChange={(evt) =>
                              handleChange(evt, "stepTechnical")
                            }
                          />
                          <label className="form-check-label">Não</label>
                        </div>
                      </div>
                    </div>

                    {brand.length !== 0 && (
                      <>
                        <hr />
                        {brand.map((brn, index) => (
                          <div className="row p-2 " key={index}>
                            <div className="col-12">
                              <p className="form-label">
                                Possui Login e Senha no portal do inversor{" "}
                                <b>{brn}</b>?
                              </p>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name={`brandLogin-${index}`}
                                  value="sim"
                                  onChange={(item) =>
                                    handleRadioBrand(
                                      [item.target.value, index],
                                      brn
                                    )
                                  }
                                />
                                <label className="form-check-label">Sim</label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name={`brandLogin-${index}`}
                                  value="nao"
                                  onChange={(item) =>
                                    handleRadioBrand(
                                      [item.target.value, index],
                                      brn
                                    )
                                  }
                                />
                                <label className="form-check-label">Não</label>
                              </div>
                              {brandLogin.length !== 0 && brandLogin[index] ? (
                                brandLogin[index][0] === "sim" ? (
                                  <div className="row p-2 ">
                                    <input
                                      type="hidden"
                                      name="brand"
                                      onChange={(evt) =>
                                        handleChangeAccess(evt, index)
                                      }
                                    />
                                    <div className="col-6">
                                      <label className="form-label">
                                        Login da(o) {brn}
                                      </label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        name="login"
                                        placeholder={`Login da(o) ${brn}`}
                                        onChange={(evt) =>
                                          handleChangeAccess(evt, index)
                                        }
                                      />
                                    </div>
                                    <div className="col-6">
                                      <label className="form-label">
                                        Senha da(o) {brn}
                                      </label>
                                      <input
                                        type="password"
                                        className="form-control"
                                        name="password"
                                        placeholder={`Senha da(o) ${brn}`}
                                        onChange={(evt) =>
                                          handleChangeAccess(evt, index)
                                        }
                                      />
                                    </div>
                                  </div>
                                ) : (
                                  <div
                                    className="alert alert-warning"
                                    role="alert"
                                  >
                                    Infelizmente não poderemos pegar os dados
                                    sem acesso a marca selecionada!
                                  </div>
                                )
                              ) : null}
                            </div>
                          </div>
                        ))}
                      </>
                    )}
                  </>
                ) : (
                  <Loading
                    text={
                      "Verificando as credenciais de acesso da(s) marca(s)..."
                    }
                  />
                )}
              </>
            ) : (
              <div className="alert alert-success" role="alert">
                Credenciais de acesso validada com sucesso!
              </div>
            )}
          </div>
        );
      case 2:
        return (
          <div className="container">
            <h5 className="text-dark mt-1">Dados Complementares</h5>
            {!check ? (
              <>
                {!loading ? (
                  <>
                    <div className="row p-2">
                      <div className="col-6">
                        <label className="form-label">Nome completo</label>
                        <input
                          type="text"
                          className="form-control"
                          name="name"
                          onChange={(evt) =>
                            handleChange(evt, "stepComplementaryData")
                          }
                          placeholder="Nome completo"
                        />
                      </div>
                      <div className="col-6">
                        <label className="form-label">CPF/CNPJ</label>
                        <input
                          type="text"
                          className="form-control"
                          name="cpf_cnpj"
                          onChange={(evt) =>
                            handleChange(evt, "stepComplementaryData")
                          }
                          placeholder="CPF/CNPJ"
                        />
                      </div>
                    </div>
                    <div className="row p-2">
                      <div className="col-6">
                        <label className="form-label">
                          Endereço de instalação
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          name="address"
                          onChange={(evt) =>
                            handleChange(evt, "stepComplementaryData")
                          }
                          placeholder="Endereço de instalação"
                        />
                      </div>
                      <div className="col-6">
                        <label className="form-label">CEP de instalação</label>
                        <input
                          type="text"
                          className="form-control"
                          name="cep"
                          onChange={(evt) =>
                            handleChange(evt, "stepComplementaryData")
                          }
                          placeholder="Cidade/Estado"
                        />
                      </div>
                    </div>
                    <hr />
                    <div className="row p-2">
                      <div className="col-6">
                        <label className="form-label">Número de Módulos</label>
                        <input
                          type="text"
                          className="form-control"
                          name="numberModules"
                          onChange={(evt) =>
                            handleChange(evt, "stepComplementaryData")
                          }
                          placeholder="Número de Módulos"
                        />
                      </div>
                      <div className="col-6">
                        <label className="form-label">Kwp</label>
                        <input
                          type="text"
                          className="form-control"
                          name="kwp"
                          onChange={(evt) =>
                            handleChange(evt, "stepComplementaryData")
                          }
                          placeholder="Kwp"
                        />
                      </div>
                    </div>
                    <div className="row p-2">
                      <div className="col-6">
                        <p className="form-label">
                          Sistema on grid ou off grid?
                        </p>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="systemType"
                            onChange={(evt) =>
                              handleChange(evt, "stepComplementaryData")
                            }
                            value="on grid"
                          />
                          <label className="form-check-label">on grid</label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="systemType"
                            onChange={(evt) =>
                              handleChange(evt, "stepComplementaryData")
                            }
                            value="off grid"
                          />
                          <label className="form-check-label">off grid</label>
                        </div>
                      </div>
                      <div className="col-6">
                        <p className="form-label">Usina solo ou telhado?</p>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="powerPlantType"
                            onChange={(evt) =>
                              handleChange(evt, "stepComplementaryData")
                            }
                            value="ground"
                          />
                          <label className="form-check-label">Solo</label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="powerPlantType"
                            onChange={(evt) =>
                              handleChange(evt, "stepComplementaryData")
                            }
                            value="roof"
                          />
                          <label className="form-check-label">Telhado</label>
                        </div>
                        {roofHeight ? (
                          <div className="row">
                            <div className="col-12">
                              <p className="form-label">Altura:</p>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="roofHeight"
                                  onChange={(evt) =>
                                    handleChange(evt, "stepComplementaryData")
                                  }
                                  value="0"
                                />
                                <label className="form-check-label">
                                  Até 4m
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="roofHeight"
                                  onChange={(evt) =>
                                    handleChange(evt, "stepComplementaryData")
                                  }
                                  value="1"
                                />
                                <label className="form-check-label">
                                  4m a 6m
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="roofHeight"
                                  onChange={(evt) =>
                                    handleChange(evt, "stepComplementaryData")
                                  }
                                  value="2"
                                />
                                <label className="form-check-label">
                                  acima de 6m
                                </label>
                              </div>
                            </div>
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </>
                ) : (
                  <Loading
                    text={"Realizando o calculo do seu plano e assinatura..."}
                  />
                )}
              </>
            ) : (
              <div className="alert alert-success" role="alert">
                Calculo realizado com sucesso!
              </div>
            )}
          </div>
        );
      case 3:
        return (
          <div className="container">
            <h5 className="text-dark mt-1">Escolha do plano e assinatura</h5>
            <div className="row p-2">
              <ul className="list-group">
                <li className="list-group-item">
                  <input
                    className="form-check-input me-1"
                    type="radio"
                    name="planSubscription"
                    value="1"
                  />

                  <label className="form-check-label mb-1" for="thirdRadio">
                    <h5 className="mb-1">Assinatura KILOWATT</h5>
                  </label>

                  <p className="mb-1">- Monitoramento via Software 24/7</p>
                  <p className="mb-1">
                    - Plataforma Exclusiva com Relatórios Geração e Alertas
                    Personalizados
                  </p>
                  <p className="mb-1">
                    - Mês <b>R$ 45,62 </b> - Ano <b>R$ 547.40</b>
                  </p>
                </li>
                <li className="list-group-item">
                  <input
                    className="form-check-input me-1"
                    type="radio"
                    name="planSubscription"
                    value="2"
                  />

                  <label className="form-check-label mb-1" for="thirdRadio">
                    <h5 className="mb-1">Assinatura MEGAWATT</h5>
                  </label>

                  <p className="mb-1"> - Plano Kilowatt + </p>
                  <p className="mb-1">- 2 Limpezas Especializadas </p>
                  <p className="mb-1">- 2 Manutenções Preventivas/Preditivas</p>
                  <p className="mb-1">
                    - Mês <b>R$ 93,45 </b> - Ano <b>R$ 1121,45</b>
                  </p>
                </li>
                <li className="list-group-item">
                  <input
                    className="form-check-input me-1"
                    type="radio"
                    name="planSubscription"
                    value="3"
                  />
                  <label className="form-check-label mb-1" for="thirdRadio">
                    <h5 className="mb-1">Assinatura GIGAWATT (100 KWP+)</h5>
                  </label>

                  <p className="mb-1">- Plano Megawatt + </p>
                  <p className="mb-1">- 4 Limpezas Especializadas </p>
                  <p className="mb-1">
                    - 4 Manutenções Preventivas/Preditivas{" "}
                  </p>
                  <p className="mb-1">- Seguro All Risk </p>
                  <p className="mb-1">- Vitrificação dos Módulos </p>
                  <p className="mb-1">
                    - Mês <b>R$ 160,84 </b> - Ano <b>R$ 1930,10</b>
                  </p>
                </li>
              </ul>

              <div className="mt-3 d-grid gap-2 d-md-flex justify-content-md-center">
                <div
                  className="btn-group"
                  role="group"
                  aria-label="Basic example"
                >
                  <button type="button" className="btn btn-primary">
                    PDF PROPOSTA
                  </button>
                  <button type="button" className="btn btn-primary">
                    PDF CONTRATO
                  </button>
                </div>
              </div>
              <div className="mt-3 d-grid gap-2 d-md-flex justify-content-md-center">
                <a className="link-primary">
                  Link para assinatura digital proposta & contrato{" "}
                </a>
              </div>
            </div>
          </div>
        );
      default:
        return <Loading text="Aguardando a confirmação do pagamento.." />;
    }
  }

  // CONTROLE DE BOTÕES DE FORMULARIOS
  function handleBtnSteps() {
    switch (controllerStep) {
      case 0:
        return (
          <button
            className="btn btn-primary"
            type="button"
            onClick={() => handleNextStpes()}
          >
            Próximo
          </button>
        );
      case 1:
        return (
          <button
            className="btn btn-primary"
            type="button"
            onClick={() => {
              !check ? feachtTestelogin_check() : handleNextStpes();
            }}
          >
            Próximo
          </button>
        );
      case 2:
        return (
          <button
            className="btn btn-primary"
            type="button"
            onClick={() => {
              !check ? feachtTestecal_check() : handleNextStpes();
            }}
          >
            Próximo
          </button>
        );
      case 3:
        return (
          <button
            className="w-50 btn btn-primary btn-lg"
            type="submit"
            onClick={() => handleNextStpes()}
          >
            Contratar serviço
          </button>
        );
      default:
        break;
    }
  }

  //   ENVIAR OS DADOS DOS FORMULARISO
  async function handleSubmit(event) {
    event.preventDefault();

    const params = {
      key: "documento",
      text: "Ordenar documento ASC",
      type: "documento",
    };

    //  await fetch("http://127.0.0.1:5000/script2", {
    //     method: "POST",
    //     mode: "no-cors",
    //     credentials: "include",
    //     body: JSON.stringify(params),
    //     cache: "no-cache",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   }).then(function (res) {
    //     if (res.status !== 200) {
    //       console.log(`Response status was not 200: ${res}`);
    //       return;
    //     }

    //     res.json().then(function (data) {
    //       console.log(data);
    //     });
    //   });
  }

  //   CONTROLE DE VISUALIZAÇÃO DOS INPUTS DE LOGON DAS BRANDS
  const handleRadioBrand = (value, brand) => {
    let res = [...brandLogin];
    res.length !== 0 ? (res[value[1]] = value) : (res[0] = value);

    // CRIANDO OBJ DOSDADOS DE LOGIN
    if (res[0] === "sim") {
      requestForm.stepTechnical.access[value[1]] = {
        brand: brand,
        login: "",
        password: "",
      };
    } else {
      requestForm.stepTechnical.access[value[1]] = {
        brand: brand,
        login: "",
        password: "",
      };
    }

    setRequestForm(requestForm);
    setBrandLogin(res);
  };

  // SET DE INPUTS CHANGES
  const handleChange = (e, step) => {
    const { name } = e.target;
    const { value } = e.target;
    requestForm[step][name] = value;
    setRequestForm(requestForm);
    setRoofHeight(requestForm.stepComplementaryData.powerPlantType == "roof");
  };

  function handleNextStpes() {
    setControllerStep(controllerStep + 1);
    setProgressStep(progressStep + 25);
    setLoading(false);
    setCheck(false);
  }

  function handlePreviousStpes() {
    setControllerStep(controllerStep - 1);
    setProgressStep(progressStep - 25);
    setLoading(false);
    setCheck(false);
  }

  const handleChangeAccess = (e, index) => {
    const { name } = e.target;
    const { value } = e.target;

    requestForm.stepTechnical.access[index][name] = value;
    setRequestForm(requestForm);
  };

  async function feachtTestelogin_check() {
    // setLoading(true);
    // await fetch("http://127.0.0.1:5000/login_check", {
    //   method: "POST",
    //   mode: "no-cors",
    //   credentials: "include",
    //   body: JSON.stringify(requestForm),
    //   cache: "no-cache",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // }).then(function (res) {
    //   console.log("res ", res);
    //   // if (res.status !== 200) {
    //   //   console.log(`Response status was not 200: ${res}`);
    //   //   setLoading(false);
    //   //   return;
    //   // }

    //   setCheck(true);

    //   res.json().then(function (data) {
    //     console.log(data);
    //   });
    //   setLoading(false);
    // });
    setCheck(true);
    setLoading(false);
  }

  async function feachtTestecal_check() {
    // setLoading(true);
    // await fetch("http://127.0.0.1:5000/cal_orcamento", {
    //   method: "POST",
    //   mode: "no-cors",
    //   credentials: "include",
    //   body: JSON.stringify(requestForm),
    //   cache: "no-cache",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // }).then(function (res) {
    //   // if (res.status !== 200) {
    //   //   console.log(`Response status was not 200: ${res}`);
    //   //   setLoading(false);
    //   //   return;
    //   // }

    //   setCheck(true);

    //   console.log(res);
    //   // res.json().then(function (data) {});
    //   setLoading(false);
    // });
    setCheck(true);
    setLoading(false);
  }

  return (
    <form onSubmit={handleSubmit} className="g-3 needs-validation" noValidate>
      <div className="card-body p-0">
        <div className="heading p-3">
          <div className="progress" style={{ height: "1px" }}>
            <div
              className="progress-bar"
              role="progressbar"
              aria-label="Example 1px high"
              style={{ width: progressStep + "%" }}
            ></div>
          </div>

          {handleSteps()}
        </div>
      </div>
      {!loading ? (
        <div className="card-footer text-center">
          {controllerStep == 3 ? (
            handleBtnSteps()
          ) : (
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
              {controllerStep < 3 && (
                <>
                  <button
                    className={`btn btn-outline-light me-md-2 text-dark ${
                      controllerStep === 0 && "d-none"
                    }`}
                    type="button"
                    onClick={() => handlePreviousStpes()}
                  >
                    Voltar
                  </button>
                  {handleBtnSteps()}
                </>
              )}
            </div>
          )}
        </div>
      ) : null}
    </form>
  );
}

export default StepsForm;
