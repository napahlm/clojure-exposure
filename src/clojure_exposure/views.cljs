(ns simple-app.views
  (:require
   [re-frame.core :as re-frame]
   [simple-app.events :as events]
   [simple-app.routes :as routes]
   [simple-app.subs :as subs]
   [reagent.core :as r] ; for clicker
   ))

; -------------------- Added components ---------------------------




; other

(def click-count (r/atom 0))

(defn counting-component []
  [:div
   "Total of " [:code "click-count"] ": " @click-count " "
   [:input {:type "button" :value "Click me!"
            :on-click #(swap! click-count inc)}]])

(defn timer-component []
  (let [seconds-elapsed (r/atom 0)]
    (fn []
      (js/setTimeout #(swap! seconds-elapsed inc) 1000)
      [:div
       "Seconds elapsed: " @seconds-elapsed])))

(defn atom-input [value]
  [:input {:type "text"
           :value @value
           :on-change #(reset! value (-> % .-target .-value))}])

(defn shared-state []
  (let [val (r/atom "test")]
    (fn []
      [:div
       [:p "The value is now: " @val]
       [:p "Change it here: " [atom-input val]]])))

; radio list

(defn radio-list []
  (let [selected-radio (re-frame/subscribe [:selected-radio])]
    (fn []
      [:div(for [option ["Option 1" "Option 2" "Option 3"]]
             [:label
              {:key option}
              [:input
               {:type "radio"
                :name "options"
                :value option
                :checked (= @selected-radio option)
                :on-change #(re-frame/dispatch [:set-selected-radio option])}]
              option])])))

; ---------- Pages -------------------------

; Navigation bar

(defn nav-link [panel label]
  [:a {:href "#"
       :on-click (fn [e]
                   (.preventDefault e)
                   (re-frame/dispatch [::events/navigate panel]))}
   label])

(defn navbar []
  [:div {:class "container"}
   [:div {:class "row"}
    [:div {:class "topnav"}
     [nav-link :home  "Home"]
     [nav-link :about "About"]
     [nav-link :data  "Data"]
     [nav-link :test  "Test"]]
    ]])

; Home page

(defn home-panel []
  (let [name (re-frame/subscribe [::subs/name])]
    [:div
     [:h1
      (str "This is a " @name " web page.")]
     [:div
      "Check out the navbar to look at different implementations."]
     ]))

(defmethod routes/panels :home-panel [] [home-panel])

; About page

(defn about-panel []
  [:div
   [:h1 "The contents"]
   
   [:div
    "This web page is made using the day8 re-frame template using bibi/pushy for routing."]])

(defmethod routes/panels :about-panel [] [about-panel])

; Data page

(defn data-panel []
  [:div
   [:h1 "Dummy data"]])

(defmethod routes/panels :data-panel [] [data-panel])

; Test page

(defn test-panel []
  (let [name (re-frame/subscribe [::subs/name])]
    [:div
     [:h1 @name]
     [counting-component]
     [timer-component]
     [shared-state]]))

(defmethod routes/panels :test-panel [] [test-panel])

; ----------- Main panel ------------------

(defn main-panel []
  (let [active-panel (re-frame/subscribe [::subs/active-panel])]
    (routes/panels @active-panel)))

(defn main-view []
  [:div
   [navbar]
   [main-panel]])