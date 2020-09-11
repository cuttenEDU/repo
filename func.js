function camelize(str) {
    return str.split('-').map((item,index) => {
      if (index != 1)
        item[0].toUpperCase() + item.slice(1);
      }).join();
  }