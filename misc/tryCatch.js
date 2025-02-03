try {
  setTimeout(function () {
    undefinedVariable;
  }, 1000);
} catch (err) {
  alert("won't work");
}

setTimeout(() => {
  try {
    undefinedVariable;
  } catch (err) {
    console.log(`inside catch ${err}`);
  }
}, 1000);
