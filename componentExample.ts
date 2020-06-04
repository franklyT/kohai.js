STYLES.HERO = {
    styles: {
      container: /*css*/`
            display: flex;
            flex-wrap: wrap;
            margin-left: 19vw;
            margin-right: 19vw;
            margin-top: 2%;
            margin-bottom: 7vh;
            height: fit-content;
            height: -moz-fit-content;

            @media (max-width: 1500px) {
                margin-left: 0 !important;
                margin-right: 0 !important;
                height: 0;
            }

            @media (max-width: 1000px) {
                margin-left: 0 !important;
                margin-right: 0 !important;
                height: 0;
            }
        `,
        headlineContainer: /*css*/`
            display: flex;
            flex: 0 0 75%;
            max-width: 75%;
            flex-direction: row;
        `,
        headlineHeaderPicture: /*css*/`
            height: 30vh;
            width: 70%;
            background-repeat: no-repeat;
            background-size: 100% 100%;
        `,
        headlineHeaderByline: /*css*/`
            height: 100%;
            width: 30%;
            margin-right: 1em;
            background-color: orange;
        `,
        headlineHeaderBylineHeadline: /*css*/`
            font-family: 'Impact';
            display: block;
            font-size: 1.5em;
            width: fit-content;
            width: -moz-fit-content;
            margin-left: auto;
            margin-right: auto;
            text-align: center;
            padding-top: 40%;
        `,
        headlineHeaderBylineSubheading: /*css*/`
            font-family: 'Lucida Sans Unicode';
            display: block;
            width: 14vw;
            margin-top: 1vh;
            margin-left: auto;
            margin-right: auto;
            font-size: 1.05em;
            font-weight: 100;
            text-align: center;
        `,
        headlineHeaderBylineHr: /*css*/`
            width: 50%;
            border-bottom: 1px solid yellow;
            margin-top: 1em;
            margin-left: auto;
            margin-right: auto;
        `,
      boxContainer: /*css*/`
            flex: 0 0 25%;
            max-width: 25%;
        `,
      boxPicture: /*css*/`
            height: 50%;
            width: 96%;
            background-repeat: no-repeat;
            background-size: 100% 100%;
        `,
      boxByline: /*css*/`
            height: 50%;
            width: 96%;
            background-repeat: no-repeat;
            background-size: 100% 100%;
            border: 1px solid orange;
            border-top: none;
        `,
      boxesContainer: /*css*/`
            display: flex;
            margin-top: 1em;
            flex: 0 0 50%;
            max-width: 50%;
            flex-direction: row;
        `,
      boxesPicture: /*css*/`
            width: 49%;
            height: 15vh;
            background-repeat: no-repeat;
            background-size: 100% 100%;
        `,
      boxesByline: /*css*/`
            width: 49%;
            height: 15vh;
            border: 1px solid orange;
            border-left: none;
        `,
      boxesBylineHeadline: /*css*/`
            font-family: 'Impact';
            display: block;
            font-size: 1.5em;
            width: fit-content;
            width: -moz-fit-content;
            margin-left: auto;
            margin-right: auto;
            text-align: center;
            padding-top: 2vh;
        `,
      boxesBylineSubheading: /*css*/`
            font-family: 'Lucida Sans Unicode';
            display: block;
            width: 14vw;
            margin-top: 1vh;
            margin-left: auto;
            margin-right: auto;
            font-size: 1.05em;
            font-weight: 100;
            text-align: center;
        `,
       hr: /*css*/`
            width: 50%;
            border-bottom: 1px solid orange;
            margin-left: auto;
            margin-right: auto;
        `
    }
  };
  
  writeDOM(
    () => {
      document.getElementById("component_hero")!.innerHTML = /*html*/`
          <div class=${STYLES.HERO.container}>
              <div class=${STYLES.HERO.headlineContainer}>
                  <div class=${STYLES.HERO.headlineHeaderPicture}></div>
                  <div class=${STYLES.HERO.headlineHeaderByline}>
                    <span class=${STYLES.HERO.headlineHeaderBylineHeadline}>Headline</span>
                    <span class=${STYLES.HERO.headlineHeaderBylineSubheading}>Stuff under the headline explaining some stuff!</span>
                    <div class=${STYLES.HERO.headlineHeaderBylineHr}></div>
                  </div>
              </div>
              <div class=${STYLES.HERO.boxContainer}>
                  <div class=${STYLES.HERO.boxPicture} style="background-image: url('./Assets/Images/index.jpg');"></div>
                  <div class=${STYLES.HERO.boxByline}>
                    <span class=${STYLES.HERO.boxesBylineHeadline}>Headline</span>
                    <span class=${STYLES.HERO.boxesBylineSubheading}>Stuff under the headline explaining some stuff!</span>
                  </div>
              </div>
              <div class=${STYLES.HERO.boxesContainer}>
                  <div class=${STYLES.HERO.boxesPicture} style="background-image: url('./Assets/Images/index.jpg');"></div>
                  <div class=${STYLES.HERO.boxesByline}>
                    <span class=${STYLES.HERO.boxesBylineHeadline}>Headline</span>
                    <span class=${STYLES.HERO.boxesBylineSubheading}>Stuff under the headline explaining some stuff!</span>
                  </div>
              </div>
              <div class=${STYLES.HERO.boxesContainer}>
                  <div class=${STYLES.HERO.boxesPicture} style="background-image: url('./Assets/Images/smartwatches-2x1-0319.jpg');"></div>
                  <div class=${STYLES.HERO.boxesByline}>
                    <span class=${STYLES.HERO.boxesBylineHeadline}>Headline</span>
                    <span class=${STYLES.HERO.boxesBylineSubheading}>Stuff under the headline explaining some stuff!</span>
                  </div>
              </div>
              <div class=${STYLES.HERO.boxesContainer}>
                  <div class=${STYLES.HERO.boxesPicture} style="background-image: url('./Assets/Images/34568-original.jpg');"></div>
                  <div class=${STYLES.HERO.boxesByline}>
                    <span class=${STYLES.HERO.boxesBylineHeadline}>Headline</span>
                    <span class=${STYLES.HERO.boxesBylineSubheading}>Stuff under the headline explaining some stuff!</span>
                  </div>
              </div>
              <div class=${STYLES.HERO.boxesContainer}>
                  <div class=${STYLES.HERO.boxesPicture} style="background-image: url('./Assets/Images/34568-original.jpg');"></div>
                  <div class=${STYLES.HERO.boxesByline}>
                    <span class=${STYLES.HERO.boxesBylineHeadline}>Headline</span>
                    <span class=${STYLES.HERO.boxesBylineSubheading}>Stuff under the headline explaining some stuff!</span>
                  </div>
              </div>
          </div>
          <div class=${STYLES.HERO.hr}></div>
          `
    }
  );
  
