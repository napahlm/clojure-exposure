(ns clojure-exposure.events
  (:require
   [re-frame.core :as re-frame]
   [clojure-exposure.db :as db]
   ))

(re-frame/reg-event-db
 ::initialize-db
 (fn [_ _]
   db/default-db))

; ---- Routes? ----------

(re-frame/reg-event-fx
 ::navigate
 (fn [_ [_ handler]]
   {:navigate handler}))

(re-frame/reg-event-fx
 ::set-active-panel
 (fn [{:keys [db]} [_ active-panel]]
   (println "Log: Setting active panel to: " active-panel)
   {:db (assoc db :active-panel active-panel)}))

; ---- Event handler ----

(re-frame/reg-event-db
 :set-selected-radio
 (fn [db [_ selected-value]]
   (assoc db :selected-radio selected-value)))
