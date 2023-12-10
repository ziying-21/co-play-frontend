class SceneAgent {
  place: string;
  time: string;
  atmosphere: string;
  vision: string[];
  hearing: string[];
  olfaction: string[];
  otherInformation: string;

  constructor(
    place: string = "",
    time: string = "",
    atmosphere: string = "",
    vision: string[] = [],
    hearing: string[] = [],
    olfaction: string[] = [],
    otherInformation: string = ""
  ) {
    this.place = place;
    this.time = time;
    this.atmosphere = atmosphere;
    this.vision = vision;
    this.hearing = hearing;
    this.olfaction = olfaction;
    this.otherInformation = otherInformation;
  }
};

export default SceneAgent;