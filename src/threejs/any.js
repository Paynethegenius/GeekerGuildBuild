
  class makeRenderer{
    static instance 
    constructor(canvas, width, height, windowWidth, scene, camera){
      if(makeRenderer.instance){
        return makeRenderer.instance
      }
      makeRenderer.instance = this
      this.canvas = canvas;
      this.width = width;
      this.height = height;
      this.scene = scene;
      this.camera = camera;
      this.windowWidth = windowWidth.innerWidth;

      this.renderer = new THREE.WebGLRenderer({
        canvas : canvas,
        antialias: true,
      });
      this.renderer.outputEncoding = THREE.sRGBEncoding;
      this.renderer.setSize(
       this.windowWidth - this.width,
      this.height
      );
    }

    render(){
      this.renderer.render(this.scene, this.camera);
      console.log(camera)
   }
  }

  const timeOut = () => {
    setTimeout(() => {
      console.log("running")
      if (dismissLoader === true) {
        console.log("running")
        
        setErrorLoader(true);          
      }else{
        console.log("runningA")
        setErrorLoader(false)
      }
    }, 10000);
  };


  timeOut(); 



  useEffect(() => {
    const createThreeInstance = () => {
      if (screenSize.width <= 600) {
        setThreeMake(false);
      } else {
        setThreeMake(true);
      }
    };

    const windowListener = (e) => {
      console.log("resized", e, window.innerWidth);
      setScreenSize({ height: window.innerHeight, width: window.innerWidth });
      createThreeInstance();
    };

    window.addEventListener("resize", windowListener);

    return () => {
      window.removeEventListener("resize", windowListener);
      console.log("removed Event listener");
    };
  }, [screenSize, setThreeMake]);