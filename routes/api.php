<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//Route::middleware('auth:api')->get('/user', function (Request $request) {
//    return $request->user();
//});
Route::post('/store/vote', 'Lottery\IndexController@store');

Route::post('/printer/print', 'Printer\PrinterController@print');
Route::post('/printer/status', 'Printer\PrinterController@printerStatus');
Route::get('/printer/listCategory', 'Printer\PrinterController@listCategory');
Route::post('/printer/printerCategory', 'Printer\PrinterController@printerCategory');
