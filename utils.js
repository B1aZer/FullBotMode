module.exports = {
  checkPrice: function(title, price) {
    if (title.includes(3080)) {
      if (price <= 800) {
        return true;
      }
    }
    else if (title.includes(3070)) {
      if (price <= 550) {
        return true;
      }
    }
    else if (title.includes(3060)) {
      if (price <= 450) {
        return true;
      }
    }
    else if (title.includes(5950)) {
      if (price <= 850) {
        return true;
      }
    }
    else if (title.includes(5900)) {
      if (price <= 600) {
        return true;
      }
    }
    else if (title.includes(5800)) {
      if (price <= 500) {
        return true;
      }
    }
    else if (title.includes(5600)) {
      if (price <= 400) {
        return true;
      }
    }
    else if (title.includes('PlayStation')) {
      if (price <= 600) {
        return true;
      }
    }
    return false;
  }
}
