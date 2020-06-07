import hello from './lib/hello';
import world from './lib/world';

export default {
  init() {
    const arr1 = [1,2,3];
    const arr2 = [4,5,6, 8];
    console.log([...arr1, ...arr2]);

    hello.init();
    world.init();
  }
}




