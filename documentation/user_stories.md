# Histórias de Usuário - MindCare

## EFETUAR LOGIN

**Eu como usuário da aplicação MindCare quero acessar a tela de login para autenticar minha conta como administrador, paciente ou profissional.**

### Requisitos

- Exibir os campos:
  - E-mail: obrigatório, com validação de formato.
  - Senha: obrigatório, com opção de visualização.
- Mensagens de erro específicas para:
  - Formato inválido.
  - Dados incorretos (usuário ou senha).
- Links para:
  - Recuperação de senha ('Esqueci a senha').
  - Cadastro de novos usuários ('Cadastrar-se').
- Após o login, direcionar o usuário para:
  - Administrador: área gerenciar usuários.
  - Paciente: área de busca por profissionais.
  - Profissional: área de gestão de atendimentos.

---

## REALIZAR CADASTRO

**Eu como usuário da aplicação MindCare quero realizar meu cadastro como paciente ou profissional para acessar os recursos da plataforma de acordo com meu perfil.**

---

### Requisitos

#### Seleção de Tipo de Usuário no Cadastro

- **O usuário deve escolher se deseja se cadastrar como Paciente ou Profissional.**

#### Paciente

- **Campos:**
  - Nome completo **(obrigatórios)**
  - Telefone _(obrigatórios)_
  - E-mail _(obrigatórios)_
  - Senha _(obrigatórios)_
  - Confirmação de senha _(obrigatórios)_
  - Opção para upload de foto _(opcional)_
- **Fluxo pós-cadastro:**
  - Direcionar o paciente para preenchimento de uma anamnese básica:
    - **Queixa principal:** informações sobre o motivo da consulta. _(obrigatórios)_
    - **Histórico psiquiátrico:** registros prévios de transtornos mentais ou tratamentos. _(obrigatórios)_
    - **Histórico médico geral:** doenças preexistentes, medicamentos em uso, etc. _(obrigatórios)_
    - **Uso de substâncias:** álcool, drogas, etc. _(obrigatórios)_
    - **Histórico familiar:** doenças psiquiátricas na família. _(obrigatórios)_
    - **Sintomas atuais:** intensidade e detalhes. _(obrigatórios)_
    - **Expectativas para o tratamento.** _(opcional)_

Fonte de referência: [Anamnese Psiquiátrica e Psicopatologia - Sanarmed](https://sanarmed.com/anamnese-psiquiatrica-e-psicopatologia/)

#### Profissional

- **Campos obrigatórios:**

  - Nome completo
  - Telefone
  - E-mail
  - Especialidade
  - Localização
  - Faixa etária de atendimento
  - Quantidade de atendimentos gratuitos disponíveis
  - Senha
  - Confirmação de senha
  - Opção para upload de foto

- **Especialidades de Saúde Mental:**

  - **Especialidades Médicas (CRM obrigatório):**

    - Psiquiatria
    - Neurologia
    - Geriatria (com foco em saúde mental em idosos)
    - Medicina da Família e Comunidade (com ênfase em saúde mental)

  - **Psicologia e Subespecialidades (CRM não obrigatório):**

    - Psicologia Clínica
    - Psicologia Hospitalar
    - Psicologia Infantil
    - Psicologia Escolar/Educacional
    - Psicologia Organizacional e do Trabalho
    - Psicologia do Esporte
    - Neuropsicologia
    - Psicologia Jurídica
    - Psicologia Social
    - Psicologia Comportamental
    - Psicanálise
    - Psicoterapia Cognitivo-Comportamental
    - Psicoterapia Psicanalítica
    - Psicoterapia Humanista
    - Psicoterapia Transpessoal
    - Terapia Sistêmica de Casal e Família
    - Psicoterapia EMDR (Eye Movement Desensitization and Reprocessing)

  - **Terapias Complementares e Alternativas (CRM não obrigatório):**

    - Terapia Ocupacional
    - Arteterapia
    - Musicoterapia
    - Dançaterapia
    - Terapia Corporal
    - Terapia Integrativa e Complementar (Yoga, Meditação, Reiki, etc.)

  - **Áreas de Especialização Adicionais (CRM não obrigatório):**

    - Terapia Comportamental Dialética (DBT)
    - Terapia de Aceitação e Compromisso (ACT)
    - Terapia Familiar Sistêmica
    - Terapia de Grupo
    - Coaching de Saúde Mental
    - Terapia de Biofeedback
    - Terapia Ocupacional em Saúde Mental

  - **Intervenções Multidisciplinares (CRM não obrigatório):**
    - Enfermagem Psiquiátrica e em Saúde Mental
    - Assistência Social em Saúde Mental
    - Nutrição com Foco em Saúde Mental
    - Fonoaudiologia em Saúde Mental (ex.: reabilitação cognitiva)
    - Educação Física Aplicada à Saúde Mental

- **Campo CRM:**
  - Será exibido apenas para especialidades médicas, como Psiquiatria, Neurologia, Geriatria e Medicina da Família e Comunidade.
  - Para as demais especialidades, o campo CRM será ocultado.

---

#### Mensagens de Validação e Sucesso

- **Validações de campos obrigatórios:**
  - Caso algum campo obrigatório não seja preenchido, exibir a mensagem:  
    _"Este campo é de preenchimento obrigatório"._
- **Mensagem pós-cadastro bem-sucedido:**
  - Exibir a mensagem:  
    _"Cadastro feito com sucesso! Agora você pode acessar sua conta."_

## RECUPERAR SENHA

**Eu como usuário da aplicação MindCare quero redefinir minha senha para recuperar o acesso à plataforma com segurança.**

### Requisitos

- Campo para inserir e-mail, com validação.
- Envio de código de verificação ao contato informado.
- Formulário para definir nova senha, respeitando critérios de segurança (mínimo de 8 caracteres, letra maiúscula, número e símbolo).
- Mensagens claras de erro ou sucesso em cada etapa:
  - Caso o código esteja incorreto, exibir: 'Código inválido. Verifique e tente novamente'.
  - Caso a senha não atenda aos critérios, exibir: 'Senha não atende aos critérios de segurança'.
  - Após sucesso: 'Senha alterada com sucesso! Agora você pode acessar sua conta'.

---

## ADMINISTRADOR MASTER

**Eu como administrador master da aplicação MindCare quero acessar a área de administração para gerenciar paciente, profissionais e cadastrar outros administradores.**

---

### Requisitos

#### Painel Administrativo Exclusivo

O administrador master deve ter acesso a um painel com as seguintes funcionalidades:

#### 1. Página Inicial (Home)

- **Listagem de profissionais e pacientes cadastrados recentemente.**
- **Indicadores resumidos:**  
  Exibir quatro campos com informações consolidadas:
  - Total de profissionais cadastrados.
  - Total de profissionais logados.
  - Total de pacientes cadastrados.
  - Total de registros ativos.

#### 2. Gerenciar Administradores

- **Listagem de administradores cadastrados, com filtros:**
  - Nome
  - E-mail
  - Data de cadastro
  - Status (ativo/inativo)
- **Funcionalidades:**
  - Cadastrar novos administradores (Campos: Nome, E-mail, Senha).
  - Botão para desativar administradores existentes.

#### 3. Gerenciar Pacientes

- **Listagem de todos os pacientes, com filtros:**
  - Nome
  - E-mail
  - Status (ativo/inativo)
  - ID do prontuário
  - Médico responsável
  - Diagnóstico
- **Funcionalidades:**
  - Botão para ativar ou desativar contas.

#### 4. Gerenciar Profissionais

- **Listagem de todos os profissionais, com filtros:**
  - Nome
  - Telefone
  - E-mail
  - Especialidade
  - Localização
  - Faixa etária de atendimento
  - Quantidade de atendimentos gratuitos disponíveis
  - Status (Aprovado/Rejeitado/Pendente)

#### 5. Aprovar ou Rejeitar Profissionais

- **Listagem de profissionais pendentes de aprovação.**
- **Funcionalidades:**
  - Revisar o perfil do profissional (incluindo especialidade, documentação, etc.) antes de aprovação.
  - Campo justificativa de rejeição.
  - Botão para aprovar ou rejeitar o profissional.

---

## ADMINISTRADOR

**Eu como administrador master da aplicação MindCare quero acessar a área de administração para gerenciar paciente e profissionais.**

### Requisitos

#### Painel Administrativo Exclusivo

O administrador deve ter acesso a um painel com as seguintes funcionalidades:

#### 1. Página Inicial (Home)

- **Listagem de profissionais e pacientes cadastrados recentemente.**
- **Indicadores resumidos:**  
  Exibir quatro campos com informações consolidadas:
  - Total de profissionais cadastrados.
  - Total de profissionais logados.
  - Total de pacientes cadastrados.
  - Total de registros ativos.

#### 2. Gerenciar Pacientes

- **Listagem de todos os pacientes, com filtros:**
  - Nome
  - E-mail
  - Status (ativo/inativo)
  - ID do prontuário
  - Médico responsável
  - Diagnóstico
- **Funcionalidades:**
  - Botão para ativar ou desativar contas.

#### 3. Gerenciar Profissionais

- **Listagem de todos os profissionais, com filtros:**
  - Nome
  - Telefone
  - E-mail
  - Especialidade
  - Localização
  - Faixa etária de atendimento
  - Quantidade de atendimentos gratuitos disponíveis
  - Status (Aprovado/Rejeitado/Pendente)

#### 4. Aprovar ou Rejeitar Profissionais

- **Listagem de profissionais pendentes de aprovação.**
- **Funcionalidades:**
  - Revisar o perfil do profissional (incluindo especialidade, documentação, etc.) antes de aprovação.
  - Campo justificativa de rejeição.
  - Botão para aprovar ou rejeitar o profissional.

---

## PROFISSIONAL

**Eu, como profissional da aplicação MindCare, quero acessar uma área personalizada para gerenciar meu perfil, definir horários de atendimento e acompanhar informações sobre meus pacientes, de forma prática e eficiente.**

### Requisitos

### 1. Página Home

1. **Notificações personalizadas**
   - Exibir notificações no header sobre novos agendamentos, alterações de status de pacientes, mensagens de administração e atualizações do sistema.
2. **Mensagem de Boas-vindas**
   - Exibir: "Olá, Seja bem-vindo(a), [Nome do Profissional]!"
3. **Tabela de Pacientes**
   - Tabela paginada com filtros por:
     - Nome
     - E-mail
     - Status (ativo/inativo)
     - ID do prontuário
     - Diagnóstico
     - CPF
   - Oferecer opção de exportação de dados nos formatos CSV ou PDF.
   - Acesso rápido a detalhes e histórico dos pacientes clicando no botão de ação.

### 2. Página de Perfil

- **Campos para atualizar informações do profissional:**

  - Nome completo
  - Telefone
  - E-mail
  - Especialidade
  - Localização
  - Faixa etária de atendimento
  - Quantidade de atendimentos gratuitos disponíveis
  - Alterar senha
  - Opção para upload de foto de perfil
  - **Botão para salvar alterações.**

- **Gerenciar Horários de Atendimento**
  - Definir dias e horários disponíveis na agenda.
  - Bloquear ou liberar horários específicos conforme necessidade.
  - Calendário interativo para visualização e ajuste rápido dos horários.
  - **Botão para salvar alterações.**

---

## PACIENTE

**Eu como paciente da aplicação MindCare quero buscar por profissionais com base em filtros para encontrar o atendimento adequado às minhas necessidades gerenciar meus dados componhar meus atendimentos realizados e futuros atendimentos, e meus prontuários com infomação necessárias.**

### Requisitos

### 1. Página Home

1. **Mensagem de boas-vindas:** Exibir mensagem personalizada com o nome do paciente: “Olá, [Nome do Paciente], como você está se sentindo hoje?”

2. Exibir uma tabela de busca com os seguintes filtros:

- Nome completo
- Telefone
- E-mail
- Especialidade
- Localização
- Faixa etária de atendimento
- Quantidade de atendimentos gratuitos disponíveis
- Exibir uma listagem de profissionais com as informações básicas:
  - Nome, especialidade, quantidade de atendimentos gratuitos disponíveis e foto.
  - Botão para acessar o perfil detalhado do profissional e agendar uma consulta.

### 2. Página de Perfil

- Atualizar informações pessoais:
- **Campos:**
  - Nome completo **(obrigatórios)**
  - Telefone _(obrigatórios)_
  - E-mail _(obrigatórios)_
  - Senha _(obrigatórios)_
  - Confirmação de senha _(obrigatórios)_
  - Opção para upload de foto _(opcional)_

### 3. Página de histórico de consultas

- Visualizar histórico de consultas:
  - Listagem de sessões realizadas e futuras.
  - Status das sessões (confirmado, pendente, cancelado).
