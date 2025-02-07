try {
  setTimeout(function () {
    undefinedVariable;
  }, 1000);
} catch (err) {
  console.log(`inside catch ${err}`);
}
