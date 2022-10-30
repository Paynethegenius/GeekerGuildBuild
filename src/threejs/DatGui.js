GUI Initialize

    if (datGui) {
      datGui.add(parameters, "positionX", -20, 20, 1).onChange(() => {
        camera.position.x = parameters.positionX;
        camera.updateProjectionMatrix();
      });
      datGui.add(parameters, "positionY", -20, 20, 1).onChange(() => {
        camera.position.y = parameters.positionY;
        camera.updateProjectionMatrix();
      });
      datGui.add(parameters, "positionZ", -20, 20, 1).onChange(() => {
        camera.position.z = parameters.positionZ;
        camera.updateProjectionMatrix();
      });

      datGui.addColor(parameters, "color").onChange((e) => {
        scene.background.set(e);
      });
    }
