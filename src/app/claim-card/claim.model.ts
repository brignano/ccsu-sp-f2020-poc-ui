export class Claim {
  constructor(
    public id?: number,
    public policy_number?: string,
    public location?: string,
    public category?: string,
    public description?: string) {}
}
