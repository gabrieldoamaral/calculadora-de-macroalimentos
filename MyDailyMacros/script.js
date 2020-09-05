function calcMacros() {
  var meta = document.getElementById('txtMeta')
  var totMeta = Number(meta.value)

  var protein = document.getElementById('txtProtein')
  var qtdP = Number(protein.value)
  var calcP = qtdP * 4
  qtdProtein.innerHTML = `Você consumiu <strong>${qtdP}gm </strong> em proteínas, totalizando ${calcP}kal em calorias.`

  var carbo = document.getElementById('txtCarbo')
  var qtdC = Number(carbo.value)
  var calcC = qtdC * 4
  qtdCarbo.innerHTML = `Você consumiu <strong>${qtdC}gm </strong> em carboidratos, totalizando ${calcC}kal em calorias`

  var fat = document.getElementById('txtFat')
  var qtdF = Number(fat.value)
  var calcF = qtdF * 9
  qtdFat.innerHTML = `Você consumiu <strong>${qtdF}gm </strong> em gorduras, totalizando ${calcF}kal em calorias`

  var totalCal = calcP + calcC + calcF
  if (totalCal >= totMeta) {
    qtdMeta.innerText =  'Você ultrapassou sua meta diária de calorias!'
  } else {
      qtdMeta.innerText = 'PARABÉNS, você manteve sua meta diária!'
  }
  totCal.innerHTML = `O total de calorias consumidos foi <strong>${totalCal}kal</strong> em calorias`
}