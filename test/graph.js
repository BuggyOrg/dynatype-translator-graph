/* global describe, it */

var expect = require('chai').expect

var dtypeGraph = require('../src/graph')

describe('Translator Graph', function () {
  it('Creates a graph for a list of translators', function () {
    var dynatypes = {
      descriptors: [{name: 'A'}, {name: 'B'}, {name: 'C'}],
      translators: [{from: 'A', to: 'B'}, {from: 'C', to: 'B'}]
    }
    console.log(dtypeGraph)
    var graph = dtypeGraph(dynatypes)
    // general properties
    expect(graph).to.be.an('object')
    expect(graph.isDirected()).to.be.true
    // node and edge count
    expect(graph.nodes()).to.have.length(3)
    expect(graph.edges()).to.have.length(2)
    // edge propriety
    expect(graph.hasEdge('A', 'B')).to.be.true
    expect(graph.hasEdge('C', 'B')).to.be.true
    expect(graph.hasEdge('A', 'C')).to.be.false
    expect(graph.hasEdge('B', 'C')).to.be.false
  })
})
