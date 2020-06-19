  //EX3 - HEX-RGBA

  const convertColorType = (color) => {
    let rgbColor = "rgb(";
    if (color.startsWith("#")) {
		// To get rgb from hex color
      rgbColor =
        rgbColor +
        parseInt(color.substr(1, 2), 16) +
        "," +
        parseInt(color.substr(3, 2), 16) +
        "," +
        parseInt(color.substr(5, 2), 16) +
        ")";
      document.body.style.background = rgbColor;
      console.log(rgbColor);
      return rgbColor;
    } else if (color.startsWith("rgb")) {
		//To get Hex from rgba
      let colorArray =
        color.indexOf("rgba(") !== -1
          ? color.replace("rgba(", "")
          : color.replace("rgb(", "");
      colorArray = colorArray.replace(")", "");
      colorArray = colorArray.split(",", 3);
      let hexColor = "#";
      colorArray.forEach((element) => {
        let hexValue = parseInt(element).toString(16);
        hexValue = hexValue.length === 1 ? "0" + hexValue : hexValue;
        hexColor = hexColor + hexValue;
      });
      document.body.style.background = hexColor;
      console.log(hexColor);
      return hexColor;
    }
  };
  
  convertColorType("rgba(255,0,0,1)");