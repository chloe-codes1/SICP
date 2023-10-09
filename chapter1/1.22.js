function display(n) {
  console.log(n);
}

function get_time() {
  return performance.now();
}

function is_prime(n) {
  if (n < 2) {
    return false;
  } else if (n === 2) {
    return true;
  } else if (n % 2 === 0) {
    return false;
  } else {
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }
}

function timed_prime_test(n) {
  display(n);
  return start_prime_test(n, get_time());
}

function start_prime_test(n, start_time) {
  return is_prime(n) ? report_prime(get_time() - start_time) : true;
}

function report_prime(elapsed_time) {
  console.time("report");
  display(" *** ");
  display(elapsed_time);
  display(" *** ");
  console.timeEnd("report");
}

timed_prime_test(199);
