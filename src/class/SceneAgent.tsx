class SceneAgent {
  place: string;
  time: string;
  atmosphere: string;
  vision: string[];
  hearing: string[];
  olfaction: string[];
  otherInformation: string;

  constructor() {
    this.place = "";
    this.time = "";
    this.atmosphere = "";
    this.vision = [];
    this.hearing = [];
    this.olfaction = [];
    this.otherInformation = "";
  }
};

export default SceneAgent;