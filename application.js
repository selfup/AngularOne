'use strict'

let colorCounter = 1

const findAngularScope = () => {
  return angular.element(document.getElementById('colors')).scope()
}

const alternateColors = (self, colorCounter, $angScope) => {
  if (colorCounter % 2 === 0) {
    self.parentElement.style.backgroundColor = $angScope.color.teal
  } else {
    self.parentElement.style.backgroundColor = $angScope.color.orange
  }
}

$('#change-color').on('click', function(e) {
  const $angScope = findAngularScope()
  colorCounter += 1
  alternateColors(this, colorCounter, $angScope)
})
