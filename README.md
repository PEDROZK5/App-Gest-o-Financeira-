# Instruções de Organização do Projeto e Uso do Git

Para evitar conflitos (merge conflicts) e facilitar o desenvolvimento em equipe, seguiremos a seguinte organização.

## Estrutura das Branches

```text
main

develop

feature/backend-auth

feature/backend-transacoes

feature/backend-relatorios

feature/frontend-auth

feature/frontend-dashboard

feature/frontend-relatorios

feature/admin

feature/testes
```

### Função de cada branch

* `main`: versão final e estável do projeto.
* `develop`: branch de integração de todas as funcionalidades.
* `feature/*`: branch individual utilizada para desenvolver cada funcionalidade.

**Regra importante:** ninguém deve trabalhar diretamente na `main`.

---

# Fluxo de trabalho

O desenvolvimento seguirá o fluxo abaixo:

```text
feature/*

↓

develop

↓

main
```

As branches `feature/*` serão utilizadas para o desenvolvimento individual.

Quando a funcionalidade estiver pronta, ela será enviada para `develop`.

A branch `main` receberá código somente após a validação final do projeto.

---

# Passo a passo para trabalhar no projeto

## 1. Clonar o repositório (somente uma vez)

```bash
git clone URL_DO_REPOSITORIO

cd controle-financeiro-pessoal
```

---

## 2. Atualizar o projeto antes de começar

```bash
git checkout develop

git pull origin develop
```

---

## 3. Criar sua branch de trabalho

Exemplo:

```bash
git checkout -b feature/backend-auth
```

ou

```bash
git checkout -b feature/frontend-dashboard
```

ou

```bash
git checkout -b feature/testes
```

---

## 4. Trabalhar normalmente no código

Após concluir a tarefa:

```bash
git add .

git commit -m "T03 - Implementação do login JWT"
```

---

## 5. Enviar a branch para o GitHub

```bash
git push origin nome-da-branch
```

Exemplo:

```bash
git push origin feature/backend-auth
```

---

## 6. Integrar a branch na `develop`

Antes de integrar, atualizar a `develop`:

```bash
git checkout develop

git pull origin develop
```

Fazer o merge:

```bash
git merge nome-da-branch
```

Exemplo:

```bash
git merge feature/backend-auth
```

Enviar a atualização:

```bash
git push origin develop
```

---

# Quando enviar para a `main`

A branch `main` será utilizada apenas no dia da entrega, quando todas as funcionalidades estiverem testadas.

Exemplo:

```text
✓ Cadastro

✓ Login JWT

✓ CRUD de transações

✓ Relatórios

✓ Gráficos

✓ Auditoria ADMIN

✓ Testes
```

Somente após a validação final:

```bash
git checkout main

git pull origin main

git merge develop

git push origin main
```

---

# Regras obrigatórias

❌ Não fazer `push` direto na `main`.

❌ Não trabalhar na branch de outro integrante.

❌ Não utilizar `git push --force`.

❌ Não apagar branches sem avisar o grupo.

✅ Sempre atualizar a `develop` antes de começar uma nova tarefa.

✅ Todos os commits devem referenciar o código da task.

Exemplos:

```text
T01 - Configuração inicial do projeto

T03 - Implementação do login JWT

T06 - CRUD de transações

T10 - Implementação dos gráficos

T13 - Testes unitários
```

---

# Resumo do fluxo

```text
Cada integrante

↓

feature/*

↓

develop

↓

testes e validação

↓

main (entrega final)
```
