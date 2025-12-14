struct Ship {
  draft: u32,
  crew: u32,
}
​
// Your code here
impl Ship {
    fn is_worth_it(&self) -> bool {
        let crew_weight = self.crew as f64 * 1.5;
        let net_draft = self.draft as f64 - crew_weight;
​
        net_draft > 20.0
    }
}