/* global describe, it, beforeEach */

var expect = require('chai').expect

var dtypeGraph = require('../lib/graph')

describe('Translator Graph', function () {
  it('Creates a graph for a list of translators', function () {
    var dynatypes = {
      descriptors: [{name: 'A'}, {name: 'B'}, {name: 'C'}],
      translators: [{from: 'A', to: 'B'}, {from: 'C', to: 'B'}]
    }
    var graph = dtypeGraph(dynatypes)
    expect(graph).to.be.an('object')
    expect(graph.nodes).to.have.length(3)
    expect(graph.edges).to.have.length(2)
  })
})
