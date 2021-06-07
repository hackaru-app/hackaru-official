import Vue from 'vue'
import mixpanel from 'mixpanel-browser'

function isStandalone() {
  return (
    navigator.standalone ||
    window.matchMedia('(display-mode: standalone)').matches
  )
}

export default ({ app, $config }, inject) => {
  mixpanel.init($config.mixpanelProjectToken)
  mixpanel.set_config({
    debug: process.env.NODE_ENV !== 'production',
  })

  app.router.afterEach((to) =>
    mixpanel.track('View page', {
      path: to.path,
    })
  )

  mixpanel.register({
    repository: 'hackaru-official',
    standalone: isStandalone(),
  })

  Vue.directive('track-links', {
    inserted(el, binding) {
      mixpanel.track_links(el, binding.value[0], binding.value[1])
    },
  })

  inject('mixpanel', mixpanel)
}
