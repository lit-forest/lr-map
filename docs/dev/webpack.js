require.ensure(dependencies, callback, chunkName);
//这是 webpack 提供的方法，这也是按需加载的核心方法。第一个参数是依赖，第二个是回调函数，第三个就是上面提到的 chunkName，用来指定这个 chunk file 的 name。