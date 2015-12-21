export class Launcher{
  public tiles = [
    {
      id: 'ID1',
      title: 'Title',
      description: 'Description',
      data: Math.random()
    },
    {
      id: 'ID2',
      title: 'Title',
      description: 'Description',
      data: Math.random()
    },
    {
      id: 'ID3',
      title: 'Title',
      description: 'Description',
      data: Math.random()
    },
    {
      id: 'ID4',
      title: 'Title',
      description: 'Description',
      data: Math.random()
    },
    {
      id: 'ID5',
      title: 'Title',
      description: 'Description',
      data: Math.random()
    },
    {
      id: 'ID6',
      title: 'Title',
      description: 'Description',
      data: Math.random()
    },
    {
      id: 'ID7',
      title: 'Title',
      description: 'Description',
      data: Math.random()
    },
    {
      id: 'ID8',
      title: 'Title',
      description: 'Description',
      data: Math.random()
    }
  ]

  attached(){
    var salvattore = require('salvattore');
    salvattore.init();
  }
}