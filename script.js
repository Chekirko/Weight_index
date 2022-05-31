const name = prompt("Введи своє ім'я");
const weight = prompt('Введи свою справжню вагу в кілограмах (тільки чесно)');
const height = prompt('Введи свій зріст в метрах');

const bmi = weight / Math.pow(height, 2);

switch (true) {
  case bmi < 18.5:
    alert(`${name}, в тебе недостатня маса тіла`);
    break;
  case bmi >= 18.5 && bmi <= 24.9:
    alert(`${name}, тобі повезло - ти в нормі!`);
    break;
  case bmi > 24.9 && bmi <= 29.9:
    alert(`${name}, задумайся! Ти на порозі ожиріння!`);
    break;
  case bmi > 29.9 && bmi <= 34.9:
    alert(`${name}, пора менше їсти! В тебе перший ступінь ожиріння!`);
    break;
  case bmi > 34.9 && bmi <= 39.9:
    alert(`${name}, швидко на спортмайданчик! В тебе другий ступінь ожиріння!`);
    break;
  default:
    alert(`${name}, негайно біжи до дієтолога! В тебе третійй ступінь ожиріння!`);
    break;
}
