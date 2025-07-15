const materias = [
  { nombre: 'CONTABILIDAD I', semestre: 1, area: 'rosado', prereqs: [] },
  { nombre: 'CONTABILIDAD II', semestre: 2, area: 'rosado', prereqs: ['CONTABILIDAD I'] },
  { nombre: 'ÁLGEBRA', semestre: 1, area: 'verde', prereqs: [] },
  { nombre: 'CÁLCULO', semestre: 2, area: 'verde', prereqs: ['ÁLGEBRA'] },
  // Continúa completando aquí las 50 materias según tu plan de estudios
];

const estadoMaterias = {};

function render() {
  const contenedor = document.getElementById('contenedor');
  contenedor.innerHTML = '';
  const porSemestre = {};
  materias.forEach(m => {
    if (!porSemestre[m.semestre]) porSemestre[m.semestre] = [];
    porSemestre[m.semestre].push(m);
  });

  for (let s in porSemestre) {
    const div = document.createElement('div');
    div.className = 'semestre';
    div.innerHTML = `<h3>${s}° Semestre</h3>`;
    porSemestre[s].forEach(m => {
      const divMat = document.createElement('div');
      const aprobado = estadoMaterias[m.nombre];
      const prereqIncompleto = m.prereqs.some(p => !estadoMaterias[p]);

      divMat.className = `materia ${m.area}`;
      if (aprobado) divMat.classList.add('aprobado');
      else if (prereqIncompleto) divMat.classList.add('bloqueado');

      divMat.textContent = m.nombre;

      if (!prereqIncompleto) {
        divMat.onclick = () => {
          estadoMaterias[m.nombre] = !estadoMaterias[m.nombre];
          render();
        };
      }

      div.appendChild(divMat);
    });
    contenedor.appendChild(div);
  }
}

render();
