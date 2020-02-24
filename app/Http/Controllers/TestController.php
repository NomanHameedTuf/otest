<?php

namespace App\Http\Controllers;

use DB;
use Illuminate\Http\Request;

class TestController extends Controller
{
    public function index(){
        // $users = Datatables::of(User::query())->make(true);
        $users = DB::table('USERS_LMS_LMS')->limit(10)->get();
        // dd($users); 
        return $users->toJson();
    }
}
