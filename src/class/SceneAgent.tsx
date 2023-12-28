class SceneAgent {
  id: number;
  place: string;
  time: string;
  atmosphere: string;
  feeling: string[];
  otherInformation: string;

  constructor(
    id: number = 0,
    place: string = "",
    time: string = "",
    atmosphere: string = "",
    feeling: string[] = [],
    otherInformation: string = ""
  ) {
    this.id = id;
    this.place = place;
    this.time = time;
    this.atmosphere = atmosphere;
    this.feeling = feeling;
    this.otherInformation = otherInformation;
  }
};

export default SceneAgent;