# Documentação - MindCare

## Índice

1. [Página de Login](#1-página-de-login)
2. [Página de Cadastro](#2-página-de-cadastro)
3. [Página de Recuperação de Senha](#3-página-de-recuperação-de-senha)
4. [Página Inicial - Administrador](#4-página-inicial-do-administrador)
5. [Página Inicial - Profissional](#5-página-inicial-do-profissional)
6. [Página Inicial - Paciente](#6-página-inicial-do-paciente)
7. [Lista de Administradores](#7-página-de-listatem-de-administradores)
8. [Cadastro de Administradores](#8-página-de-cadastro-de-administradores)
9. [Lista de Profissionais](#9-página-de-listatem-de-profissionais)
10. [Lista de Pacientes](#10-página-de-listatem-de-pacientes)
11. [Perfil - Administrador](#11-página-de-perfil-do-administrador)
12. [Perfil - Profissional](#12-página-de-perfil-do-profissionais)
13. [Perfil - Pacientes](#13-página-de-perfil-do-pacientes)
14. [Redefinição de Senha](#14-pagina-de-redefinição-de-senha)

## **1. Página de Login**

### **Campos do Formulário**

- **E-mail** (campo de texto):
  - Validação: formato válido de e-mail (ex.: usuario@dominio.com).
  - Placeholder: “Digite seu e-mail”.
  - Mensagem de erro: “E-mail inválido”.
- **Senha** (campo de senha com opção de exibição):
  - Validação: obrigatório.
  - Placeholder: “Digite sua senha”.
  - Mensagem de erro: “Senha inválida”.
- **Botões e Links**:
  - Entrar: desabilitado até validação dos campos.
  - Esqueci a senha: redireciona para recuperação de senha.
  - Cadastrar-se: redireciona para a página de cadastro.

### **Redirecionamento Pós-login**

- **Administrador**: Página inicial de gerenciamento.
- **Paciente**: Página de busca por profissionais.
- **Profissional**: Página de gestão de atendimentos.

## **2. Página de Cadastro**

### **Campos Gerais (Para Todos os Usuários)**

- **Foto de perfil** (opcional): Permite o upload de uma foto do usuário.
- **Nome completo** (obrigatório): Nome do usuário para identificação.
  - **Placeholder:** "Digite seu nome completo."
  - **Erro:** "Este campo é obrigatório."
- **Data de nascimento** (obrigatório): Data de nascimento do usuário.
  - **Placeholder:** "Informe sua data de nascimento."
  - **Erro:** "Formato inválido. Use dd/mm/aaaa."
- **CPF** (obrigatório): CPF do usuário, utilizado para identificação única.
  - **Placeholder:** "Digite seu CPF."
  - **Erro:** "CPF inválido."
- **E-mail** (obrigatório): E-mail para comunicação e recuperação de conta.
  - **Placeholder:** "Digite seu e-mail."
  - **Erro:** "E-mail inválido."
- **Telefone** (obrigatório): Número de telefone para contato.
  - **Placeholder:** "Digite seu telefone com DDD."
  - **Erro:** "Número inválido. Use o formato com 10 ou 11 dígitos."
- **CEP** (obrigatório): Número de telefone para contato.
  - **Placeholder:** "Digite seu CEP."
  - **Erro:** "CEP inválido. Deve conter 8 dígitos."
- **Rua** (campo de texto): Preenchido automaticamente ou manualmente.
- **Bairro** (campo de texto): Preenchido automaticamente ou manualmente.
- **Cidade** (campo de texto): Preenchido automaticamente ou manualmente.
- **Estado** (dropdown): Preenchido automaticamente ou manualmente; opções: lista de UFs.
- **Número** (campo numérico): Obrigatório, preenchido manualmente.
  - **Placeholder:** "Digite o número do endereço."
  - **Erro:** "Este campo é obrigatório."
- **Complemento** (campo de texto): Opcional.
  - **Placeholder:** "Digite um complemento (opcional)."
- **Tipo de Usuário** (obrigatório): Define se o usuário é um paciente ou profissional.
  - **Placeholder:** "Selecione o tipo de usuário."
  - **Erro:** "Este campo é obrigatório."
- **Senha** (obrigatório): Criação de senha para acesso à conta.
  - **Placeholder:** "Crie sua senha."
  - **Erro:** "A senha deve ter ao menos 8 caracteres, incluindo letras maiúsculas, minúsculas, números e caracteres especiais."
- **Confirmação de senha** (obrigatório): Confirmação da senha para validação.
  - **Placeholder:** "Confirme sua senha."
  - **Erro:** "As senhas devem ser iguais."

### **Cadastro de Paciente**

- **Queixa principal** (obrigatório):

  - **Placeholder:** "Descreva o motivo principal da sua consulta."
  - **Erro:** "Este campo é obrigatório."
  - **Tooltip:** "Explique em poucas palavras o que motivou você a buscar ajuda."

- **Histórico psiquiátrico** (obrigatório):

  - **Placeholder:** "Informe seu histórico psiquiátrico."
  - **Erro:** "Este campo é obrigatório."
  - **Tooltip:** "Inclua informações sobre diagnósticos ou tratamentos psiquiátricos prévios."

- **Histórico médico geral** (obrigatório):

  - **Placeholder:** "Informe seu histórico médico geral."
  - **Erro:** "Este campo é obrigatório."
  - **Tooltip:** "Liste condições de saúde prévias ou doenças crônicas."

- **Uso de substâncias** (obrigatório):

  - **Placeholder:** "Descreva seu uso de substâncias (se houver)."
  - **Erro:** "Este campo é obrigatório."
  - **Tooltip:** "Mencione o uso de álcool, tabaco ou outras substâncias."

- **Histórico familiar** (obrigatório):

  - **Placeholder:** "Informe seu histórico familiar de saúde."
  - **Erro:** "Este campo é obrigatório."
  - **Tooltip:** "Inclua informações sobre condições de saúde presentes em parentes próximos."

- **Sintomas atuais** (obrigatório):

  - **Placeholder:** "Descreva os sintomas que você está sentindo."
  - **Erro:** "Este campo é obrigatório."
  - **Tooltip:** "Liste os sintomas mais relevantes e como eles afetam seu dia a dia."

- **Expectativas para o tratamento** (opcional):
  - **Placeholder:** "Descreva suas expectativas para o tratamento (opcional)."
  - **Tooltip:** "Conte o que espera alcançar com o tratamento, se desejar."

Fonte de referência: [Anamnese Psiquiátrica e Psicopatologia - Sanarmed](https://sanarmed.com/anamnese-psiquiatrica-e-psicopatologia/)

### **Cadastro de Profissional**

- **Registro Profissional** (obrigatório): Número de registro do profissional (CRM, Coren, etc.).

  - **Placeholder:** "Digite seu registro profissional."
  - **Erro:** "Este campo é obrigatório."

- **UF do Órgão Emissor** (obrigatório): Estado responsável pela emissão do registro profissional.

  - **Placeholder:** "Selecione a UF emissora."
  - **Erro:** "Este campo é obrigatório."

- **Especialidade** (obrigatório): Área de atuação do profissional.

  - **Placeholder:** "Digite sua especialidade."
  - **Erro:** "Este campo é obrigatório."

- **Faixa etária do atendimento** (obrigatório): Idades atendidas pelo profissional (ex.: infantil, adulto, idoso).

  - **Placeholder:** "Informe a faixa etária atendida."
  - **Erro:** "Este campo é obrigatório."

- **Quantidade de atendimentos gratuitos** (obrigatório): Indicação de quantos atendimentos gratuitos o profissional oferece, caso haja essa opção.

  - **Placeholder:** "Informe a quantidade de atendimentos gratuitos."
  - **Erro:** "Este campo é obrigatório."

- **Tipo de atendimento** (obrigatório): Define o formato do atendimento (remoto, presencial ou ambos).
  - **Placeholder:** "Selecione o tipo de atendimento."
  - **Erro:** "Este campo é obrigatório."

## **3. Página de Recuperação de Senha**

### **Etapa 1: Entrada de E-mail**

- **E-mail** (texto):
  - Placeholder: “Digite seu e-mail”.
  - Botão: “Enviar Código”.

### **Etapa 2: Código de Verificação**

- **Campos de Código** (5 campos numéricos):
  - Avanço automático para o próximo campo ao digitar.
  - Botão: “Verificar Código”.
  - Link: “Reenviar Código”.

### **Etapa 3: Criação de Nova Senha**

- **Nova Senha** (obrigatório)
  - **Validação:** A senha deve seguir os seguintes critérios de segurança:
    - No mínimo 8 caracteres.
    - Pelo menos uma letra maiúscula.
    - Pelo menos uma letra minúscula.
    - Pelo menos um número.
    - Pelo menos um caractere especial (ex.: !@#$%&\*).
- **Confirmação de senha** (obrigatório): Confirmação da senha para validação.
  - **Validação:** Deve ser idêntica à senha inserida no campo anterior.
- Botões: **“Cancelar”** (redireciona para login), **“Salvar”** (salva e redireciona para login).

## **4. Página Inicial do Administrador**

Esta página é exclusiva para administradores e exibe a seguinte mensagem de boas-vindas:

"Olá, [nome do usuário]! Seja bem-vindo(a) ao seu painel de controle."

### **Indicadores Resumidos**

- Total de profissionais cadastrados.
- Total de profissionais logados.
- Total de pacientes cadastrados.
- Registros ativos.

### **Listagens Resumidas**

- **Profissionais**:
  - Exibidos em uma tabela não paginada com os 5 cadastros mais recentes.
  - Colunas: Nome, registro profissional, especialidade, status, e botão "Detalhes".
  - Ação: O botão "Detalhes" redireciona para a [Página de Perfil do Profissional](#12-página-de-perfil-do-profissionais).
- **Pacientes** (tabela não paginada):
  - Exibidos em uma tabela não paginada com os 5 cadastros mais recentes.
  - Colunas: Nome, data de nascimento, prontuário, e botão "Detalhes".
  - Ação: O botão "Detalhes" redireciona para a [Página de Perfil do Paciente](#13-página-de-perfil-do-pacientes).

## **5. Página Inicial do Profissional**

- **Mensagem de Boas-vindas**: "Olá, Seja bem-vindo(a), [Nome do Profissional]!"

- **Filtro de busca**

  - Nome, Data de Nascimento, E-mail, Prontuário, Diagnóstico, Status (Ativo/Inativo).

- **Listagem** (tabela paginada):
  - Nome, Data de Nascimento, E-mail, Prontuário, Diagnóstico, Status (Ativo/Inativo)
  - Botão “Detalhes” (redireciona para [Página de Perfil do Paciente](#13-página-de-perfil-do-pacientes)).

## **6. Página Inicial do Paciente**

- **Mensagem de Boas-vindas** “Olá, [Nome do Paciente], como você está se sentindo hoje?”

- **Filtro de Busca**

  - Registro Profissional, Nome, Telefone, E-mail, Especialidade, Faixa Etária de Atendimento, Quantidade de Atendimentos Gratuitos Disponíveis.

- **Listagem (Tabela Paginada)** Exibe as seguintes informações:
  - Registro Profissional, Nome, Telefone, E-mail, Especialidade, Faixa Etária de Atendimento, Quantidade de Atendimentos Gratuitos Disponíveis.
  - Botão “Detalhes” (redireciona para [Página de Perfil do Profissonal](#12-página-de-perfil-do-profissionais)).

## **7. Página de Listatem de Administradores**

Visível apenas para administradores master.

- **Texto Introdução:**
  "Listar administradores Cadastrados
  Aqui você pode visualizar todos os administradores cadastrados no aplicativo MindCare"

- **Filtro de Busca**

  - ID, Nome, Data de Cadastro, Tipo de Usuário (Comum ou Master), Status (Ativo ou Inativo)
  - Botão “Buscar” para pesquisar resultados
  - Botão “+ Novo Administrador” (redireciona para [Página de Cadastro de Administradores](#6-página-de-cadastro-de-administradores))

- **Listagem** (tabela paginada):
  - ID, nome, data de cadastro, tipo de usuário (comum ou master), status, botão “Detalhes” (Ao clicar deve levar para [Página de Perfil do Administrador](#)).

## **8. Página de Cadastro de Administradores**

Visível apenas para administradores master.

Formulário de Cadastro O formulário é o mesmo dos [Campos Gerais (Para Todos os Usuários)](#campos-gerais-para-todos-os-usuários), mas a senha estará desabilitada e será gerada automaticamente. A nova senha será enviada ao usuário, que, ao fazer login, será redirecionado para [Redefinição de Senha](#10-página-de-listatem-de-pacientes).

## **9. Página de Listatem de Profissionais**

- **Texto Introdução:**
  "Listar profissionais cadastrados
  Aqui você pode visualizar todos os profissionais cadastrados no aplicativo MindCare"

- **Listagem (tabela paginada)** Exibe as seguintes informações:
  - ID, Nome, Especialidade, Quantidade de Atendimentos Gratuitos, Status (Pendente, Aprovado, Rejeitado)
  - Botão “Detalhes” (redireciona para [Página de Perfil do Prossional](#10-página-de-perfil-do-profissional)).

## **10. Página de Listatem de Pacientes**

- **Texto Introdução:**
  "Listar pacientes cadastrados
  Aqui você pode visualizar todos os pacientes cadastrados no aplicativo MindCare"

- **Listagem** (tabela paginada):
  - ID, Nome, Data de Nascimento, Número do Prontuário, Status (Ativo ou Inativo)
  - botão “Detalhes” (Ao clicar deve levar para [Página de Perfil do Paciente](#13-página-de-perfil-do-pacientes)).

## **11. Página de Perfil do Administrador**

- Exibe o formulário de [Campos Gerais](#campos-gerais-para-todos-os-usuários), mas sem os campos de senha e confirmação de senha.
- O usuário logado pode editar apenas seus próprios dados.
- Caso o usuário seja um administrador master, ele poderá visualizar as informações do administrador e ativar ou desativar o perfil desse usuário.

## **12. Página de Perfil do Profissionais**

### **A página apresenta um componente de abas (tabs) com os seguintes conteúdos:**

- **Primeira Aba:** Formulário de [Campos Gerais](#campos-gerais-para-todos-os-usuários)(sem os campos de senha e confirmação de senha).
  - O usuário logado pode editar apenas seus próprios dados.
- **Segunda Aba:**
  - **Para Profissionais:** O profissional pode editar seus horários e as informações do Cadastro de Profissional.
  - **Para Pacientes:** O paciente visualiza os dados do profissional com os campos desabilitados. Um botão para agendar consulta fica habilitado somente quando um horário e dia são selecionados.
  - **Para Administradores:** O administrador visualiza os dados do profissional com os campos desabilitados. A aba inclui o status do profissional (Aprovado, Pendente, Reprovado), com botões para aprovar ou reprovar. Para reprovar, o campo justificativa deve estar preenchido.

## **13. Página de Perfil do Paciente**

A página possui um componente de abas (tabs) com as seguintes seções:

- **Primeira Aba**: Formulário de [Campos Gerais](#campos-gerais-para-todos-os-usuários) (sem os campos de senha e confirmação de senha).

  - O usuário logado pode editar apenas seus próprios dados.

- **Segunda Aba**: Informações da [Anamnese](#cadastro-de-paciente), onde o paciente pode editar seus dados.

- **Terceira Aba**: Histórico de consultas. Caso o profissional tenha passado alguma receita, o paciente pode baixar o PDF.

**Comportamento para diferentes usuários**:

- **Profissional**: A primeira e segunda abas estão desabilitadas. Na terceira aba, ele pode enviar uma receita médica (com opção de upload) e adicionar um diagnóstico ou observação.
- **Administrador**: O administrador visualiza todas as informações do paciente com campos desabilitados, podendo apenas baixar a receita na aba de histórico.
- **Histórico de Consultas**: A tabela exibe:
  - Nome do profissional, Data da sessão, Status (Confirmado ou Pendente), Receita, Ação (somente o paciente pode confirmar se a sessão ocorreu).

## **14. Página de Redefinição de Senha**

A página contém os campos:

- Senha antiga, nova senha e confirmação da nova senha, seguindo os critérios de segurança.
