class SceneAgent {
  id: number;
  place: string;
  time: string;
  atmosphere: string[];
  feeling: string[];
  otherInformation: string[];
  story_id: number;

  constructor(
    id: number = 0,
    place: string = "",
    time: string = "",
    atmosphere: string[] = [],
    feeling: string[] = [],
    otherInformation: string[] = [],
    story_id: number = 0
  ) {
    this.id = id;
    this.place = place;
    this.time = time;
    this.atmosphere = atmosphere;
    this.feeling = feeling;
    this.otherInformation = otherInformation;
    this.story_id = story_id;
  }
};

export default SceneAgent;