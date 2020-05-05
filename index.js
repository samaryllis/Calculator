// Functions
function get(name) {
  return document.querySelector('[name="' + name + '"]');
}

// Plus
plus1 = get("plus1");
plus2 = get("plus2");
plusResult = document.getElementById("plusResult");

plus1.addEventListener("input", plusValue);
plus2.addEventListener("input", plusValue);

function plusValue(e) {
  plusResult.textContent = Number(plus1.value) + Number(plus2.value);
}

// Minus
minus1 = get("minus1");
minus2 = get("minus2");
minusResult = document.getElementById("minusResult");

minus1.addEventListener("input", minusValue);
minus2.addEventListener("input", minusValue);

function minusValue(e) {
  minusResult.textContent = Number(minus1.value) - Number(minus2.value);
}

// times
times1 = get("times1");
times2 = get("times2");
timesResult = document.getElementById("timesResult");

times1.addEventListener("input", timesValue);
times2.addEventListener("input", timesValue);

function timesValue(e) {
  timesResult.textContent = Number(times1.value) * Number(times2.value);
}

// split
split1 = get("split1");
split2 = get("split2");
splitResult = document.getElementById("splitResult");

split1.addEventListener("input", splitValue);
split2.addEventListener("input", splitValue);

function splitValue(e) {
  console.log(split2.value);
  if (!split2.value || split2.value == 0) {
    return;
  }
  splitResult.textContent = Number(split1.value) / Number(split2.value);
}
