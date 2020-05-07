const {
  createContainer,
  asClass,
  asValue,
  asFunction
} = require('awilix');

//config
const config = require('../config');
const app = require('.');

//services
const {
  HomeService,
  UserService,
  IdeaService,
  CommentService
} = require('../services');

//models
const {
  User,
  Comment,
  Idea
} = require('../models');

//repositories
const {
  UserRepository,
  IdeaRepository,
  CommentRepository
} = require('../repositories');

//controllers
const { HomeController } = require('../controllers');

//routes
const { HomeRoutes } = require('../routes/index.routes');
const Routes = require('../routes');

const container = createContainer();
container
  .register({
    app: asClass(app).singleton(),
    router: asFunction(Routes).singleton(),
    config: asValue(config)
  })
  .register({
    HomeService: asClass(HomeService).singleton(),
    UserService: asClass(UserService).singleton(),
    IdeaService: asClass(IdeaService).singleton(),
    CommentService: asClass(CommentService).singleton()
  })
  .register({
    HomeController: asClass(HomeController.bind(HomeController)).singleton()
  })
  .register({
    HomeRoutes: asFunction(HomeRoutes).singleton()
  })
  .register({
    User: asValue(User),
    Comment: asValue(Comment),
    Idea: asValue(Idea)
  })
  .register({
    UserRepository: asClass(UserRepository).singleton(),
    IdeaRepository: asClass(IdeaRepository).singleton(),
    CommentRepository: asClass(CommentRepository).singleton()
  });

module.exports = container;

