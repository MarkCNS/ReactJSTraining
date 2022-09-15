function checkProm() {
    return new Promise((resolve, reject) => {
      if (Math.random() > 0.5) {
        resolve('Promise Accessed');
      } else {
        reject(new Error('Promise Failed to Access'));
      }
    });
  }

        checkProm()
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.error(err);
            })
            .finally(() => {
                console.log('Access Scanning completed');
            });
