
# Banco de Dados do Projeto Universo Inclusivo


Este README fornecerá informações sobre a estrutura do banco de dados utilizado no projeto Universo Inclusivo. O sistema gerencia informações relacionadas a cursos, professores, turmas, matrículas e alunos.

## Tabelas

### Curso

- `id:` inteiro (Chave Primária)

- `nome:` string

- `requisito:` string

- `cargaHoraria:` inteiro

- `preco:` float


### Professor

- `id:` inteiro (Chave Primária)

- `nome:` string

- `salario:` float

- `status:` enum ('ativo', 'inativo', 'aposentado', Afastado)

### Turma

- `id:` inteiro (Chave Primária)

- `dataInicio:` data

- `dataFinal:` data

- `carga_horaria:` inteiro

### Matricula

- `id:` inteiro (Chave Primária)
- `dataMatricula:` data

### Aluno

- `id:` inteiro (Chave Primária)

- `nome:` string

- `CPF:` string

- `email:` string

- `dataNascimento:` data
  
## Relacionamentos

### Cursos com Turmas

A tabela Curso pode estar relacionada com a tabela `Turma` por meio de uma chave estrangeira em `Turma` que referencia `Curso`. Isso permite que um curso tenha várias turmas associadas.

### Professores com Turmas

A tabela `Professor` pode estar relacionada com a tabela `Turma` por meio de uma chave estrangeira em `Turma` que referencia `Professor`. Isso permite que um professor esteja associado a várias turmas.

### Alunos com Matrículas

A tabela `Aluno` pode estar relacionada com a tabela `Matricula` por meio de uma chave estrangeira em Matricula que referencia `Aluno`. Isso permite que um aluno possa ter várias matrículas associadas.

### Turma com Matrícula

A tabela `Turma` pode estar relacionada com a tabela Matricula por meio de uma chave estrangeira em `Matricula` que referencia `Turma`. Isso permite associar uma matrícula a uma turma específica.

### Diagrama ER (Entidade-Relacionamento)


Este é um resumo da estrutura do banco de dados para o Projeto Universo Inclusivo. Certifique-se de adaptar conforme necessário ao implementar o banco de dados em seu ambiente. Para mais informações ou dúvidas, entre em contato com a Squad-39 pelo e-mail rodrigo.santos@aluno.recode.org.br.

Agradecemos por contribuir para a construção de um ambiente mais inclusivo e diversificado!