open Rx
open Operators

let stream1 = create (fun obs -> ignore(next obs 20))


let subscription1 = subscribe stream1 begin
    fun myVal -> ignore(myVal)
  end

let x = map (fun item -> item + 20) stream1


external scheduler : scheduler = "" [@@bs.val]
(* external observer1 : 'any observer = "" [@@bs.val]
let subscription2 = subscribeObs stream1 observer1 *)

(* let _ = unsubscribe subscription1 *)

(* let x = map (fun item -> item + 4); *)

let x = map (fun item -> item + 5)

let y = x stream1
  |> mapi (fun item index -> item + index + 4)
  |> map begin fun x -> x + 5 end
  |> switchToArray (fun _ -> [| 10 |])
  |> filteri (fun _x _y -> false)
  |> debounceTime 1000 ~scheduler ()
  |> debounceTime 100 ()

