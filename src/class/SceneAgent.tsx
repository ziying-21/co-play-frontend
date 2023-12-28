class SceneAgent {
  place: string;
  time: string;
  atmosphere: string;
  feeling: string[];
  otherInformation: string;

  constructor(
    place: string = "",
    time: string = "",
    atmosphere: string = "",
    feeling: string[] = [],
    otherInformation: string = ""
  ) {
    this.place = place;
    this.time = time;
    this.atmosphere = atmosphere;
    this.feeling = feeling;
    this.otherInformation = otherInformation;
  }
};

export default SceneAgent;