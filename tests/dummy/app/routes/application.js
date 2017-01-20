import Ember from 'ember';
import chroma from 'chroma';

const { Route } = Ember;

export default Route.extend({
  model() {
    return chroma.brewer.OrRd;
  }
});
