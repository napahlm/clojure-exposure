(ns simple-app.subs
  (:require
   [re-frame.core :as re-frame]))

(re-frame/reg-sub
 ::name
 (fn [db]
   (:name db)))

; routes
(re-frame/reg-sub
 ::active-panel
 (fn [db _]
   (:active-panel db)))

; ----- Subscribers -----

(re-frame/reg-sub
 :selected-radio
 (fn [db _]
   (:selected-radio db)))
