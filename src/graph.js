import {Graph} from 'graphlib'

export default function (dynatypes) {
  var descriptors = dynatypes.descriptors
  var translators = dynatypes.translators

  var g = new Graph()

  // create nodes
  for (let i = 0; i < descriptors.length; i++) {
    g.setNode(descriptors[i].name, descriptors[i].name)
  }

  // create edges between nodes
  for (let i = 0; i < translators.length; i++) {
    var source = translators[i].from
    var target = translators[i].to
    g.setEdge(source, target)
  }

  return g
}
