(ns simple-app.core
  (:require
   [reagent.dom :as rdom]
   [re-frame.core :as re-frame]
   [simple-app.events :as events]
   [simple-app.routes :as routes]
   [simple-app.views :as views]
   [simple-app.config :as config]
   ))


(defn dev-setup []
  (when config/debug?
    (println "dev mode")))

(defn ^:dev/after-load mount-root []
  (re-frame/clear-subscription-cache!)
  (let [root-el (.getElementById js/document "app")]
    (rdom/unmount-component-at-node root-el)
    (rdom/render [views/main-view] root-el)))

(defn init []
  (routes/start!)
  (re-frame/dispatch-sync [::events/initialize-db])
  (dev-setup)
  (mount-root))
