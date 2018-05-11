import Vue from 'vue'
import Router from 'vue-router'
// import App from '../App'
// import Hello from '@/components/Hello'

Vue.use(Router)

const home = function home(r) {
  return require.ensure([], function () {
    return r(require('../components/Home'));
  }, 'home');
}

const smartbracelet = function smartbracelet(r) {
  return require.ensure([], function () {
    return r(require('../components/SmartBracelet'));
  }, 'smartbracelet');
}

const homeschool = function homeschool(r) {
  return require.ensure([], function () {
    return r(require('../components/HomeSchool'));
  }, 'homeschool');
}

const classcard = function classcard(r) {
  return require.ensure([], function () {
    return r(require('../components/ClassCard'));
  }, 'classcard');
}

const aboutus = function aboutus(r) {
  return require.ensure([], function () {
    return r(require('../components/AboutUS'));
  }, 'aboutus');
}
const xcourse = function aboutus(r) {
  return require.ensure([], function () {
    return r(require('../components/XCourse'));
  }, 'xcourse');
}
const servicecenter = function aboutus(r) {
  return require.ensure([], function () {
    return r(require('../components/ServiceCenter'));
  }, 'servicecenter');
}

export default [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/',
    component: home
  },
  {
    path: '/home',
    component: home
  },
  {
    path: '/smartbracelet',
    component: smartbracelet
  },
  {
    path: '/homeschool',
    component: homeschool
  },
  {
    path: '/classcard',
    component: classcard
  },
  {
    path: '/aboutus',
    component: aboutus
  },
  {
    path: '/xcourse',
    component: xcourse
  },
  {
    path: '/servicecenter',
    component: servicecenter
  }
]