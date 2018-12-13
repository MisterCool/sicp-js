// у этого файла тестов нет, неспособность запустится и есть сам тест

// Exercise 1.5 Ben Bitdiddle has invented a test to determine whether the interpreter he is faced with is using applicative-order evaluation or normal-order evaluation. He defines the following two functions :

function p() {
  return p();
}

function test(x, y) {
  return x === 0 ? 0 : y;
}

test(0, p());

// What behavior will Ben observe with an interpreter that uses applicative-order evaluation?
// What behavior will he observe with an interpreter that uses normal-order evaluation? Explain your answer.

// тут нужно определить как порядок выполнения даннй функции: аппликативный или нормальный.

// при Нормальном порядке вычесления идут по мере необходимости самих вычеслений.
// Это означет, что test(0, p()) должен вернуть ноль, поскольку ноль явно передан аргументом функции. И сразу после этого завершить выполнение. Значит это не Нормальный порядок, а Апликативный.

// Другим доводом в доказательство Апликативного порядка служит то, что выполнение test(0, p()) падает из за бесконечного вызова функции p(), котороая вызывает p() и так далее. Это говорит от том, что перед тем как вернуть "очевидный" вызов test() с аргументами 0 и p(), сначала происходит вычесление p(), на этом все и ломается.
