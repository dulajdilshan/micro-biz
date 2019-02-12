@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Dashboard</div>

                    <div class="card-body">
                        @if (session('status'))
                            <div class="alert alert-success" role="alert">
                                {{ session('status') }}
                            </div>
                        @endif
                        <h4>You are logged in!</h4>
                        <a>User ID:    {{ Auth::user()->id }}</a><br/>
                        <a>Name:       {{ Auth::user()->name }}</a><br/>
                        <a>Email:      {{ Auth::user()->email }}</a>

                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
