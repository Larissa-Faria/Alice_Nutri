const botaoAdd = document.querySelector("#adicionar-paciente");
botaoAdd.addEventListener("click", function (event) {
  event.preventDefault();

  let form = document.querySelector("#form-adiciona");
  const paciente = obterInfoForm(form);
  //cria tr e td no paciente
  let pacienteTr = criaTr(paciente);

  //addicionando o paciente na tabela
  let tabela = document.querySelector("#tabela-pacientes");
  tabela.appendChild(pacienteTr);

  form.reset();
});
function obterInfoForm(form) {
  const paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaImc(form.peso.value, form.altura.value),
  };
  return paciente;
}
function criaTr(paciente) {
  let pacienteTr = document.createElement("tr"); //cria tr e td no paciente
  pacienteTr.classList.add("paciente");

  pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
  pacienteTr.appendChild(montaTd(paciente.nome, "info-peso"));
  pacienteTr.appendChild(montaTd(paciente.nome, "info-altura"));
  pacienteTr.appendChild(montaTd(paciente.nome, "info-gordura"));
  pacienteTr.appendChild(montaTd(paciente.nome, "info-imc"));
  return pacienteTr;
}
function montaTd(dado, classe) {
  let td = document.createElement("td");
  td.textContent = dado;
  td.classList.add(classe);
  return td;
}
