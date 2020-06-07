function hello () {
  console.log('hello');
}

function test () {
  console.log('test');
}

var install$1 = install; //umd

export default install$1;
export { hello as Hello, test as Test };
