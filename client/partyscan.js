// js/todoList.js
'use strict';

var url_server = 'http://localhost:8080';



/**
 * Déclaration de l'application demoApp
 */
var partyScanJSapp = angular.module('partyScanJSapp', [
    // Dépendances du "module"
    'partyScanJS'
]);

/**
 * Déclaration du module todoList
 */
var partyScanJS = angular.module('partyScanJS',[]);

var sounds = [];
sounds['bip'] = new Audio('/audio/bip.mp3');
sounds['bop'] = new Audio('/audio/alarme1.mp3');


/**
 * Contrôleur de l'application "Todo List" décrite dans le chapitre "La logique d'AngularJS".
 */
partyScanJS.controller('partyScanJSCtrl', ['$scope', '$interval',
    function ($scope,$interval  ) {

        // Pour manipuler plus simplement les todos au sein du contrôleur
        // On initialise les todos avec un tableau vide : []
        var liste = $scope.liste = listingSrc;
        
        //console.log( liste );
        
        $scope.tick = false;
        $scope.payeValue = 0
        
        $scope.selectTicket = function( ticket )
        {
			//console.log( index );
			$scope.tick = ticket; //$scope.liste[ index ];
			console.log( $scope.tick );
			$scope.payeValue = $scope.tick.total_amount;
		}
        
        
        $scope.validePaye = function( mode )
        {
			$scope.tick.paiement = { 'mode':mode
									,'value':$scope.payeValue };
		}
        
        /*
        socket.on('log', function (data) {
			$scope.onBadge( data );
		});
        
        */
        /*
        $scope.check_timer = $interval( function(){
												if( io.managers[ url_server ].connected.length == 1 && io.managers[ url_server ].connected[0].connected==true  )
													$scope.connected = true;
												else
													$scope.connected = false;
												}
									 ,1000 );
        
        
        */
        /*
        $scope.onBadge = function( data )
        {
			data = data.toLowerCase();
			$scope.lastlog_id = data;
			console.log( data );
			
			if( $scope.mode_supp_badge == true )
			{
				$scope.pushBadge( data, true ); // send info to server
				$scope.passages.unshift( { time: new Date(), badge: data, nom: 'SUPPRESSION', prenom: ''  } );
				return;
			}
			else
			{
				for( var i in $scope.users )
				{
					if( $scope.users[ i ].badges )
					{
						for( var j=0;j<$scope.users[ i ].badges.length;j++)
						{
							if( $scope.users[ i ].badges[ j ] == data )
							{
								$scope.validPassage( $scope.users[ i ], data );
								return;
							}
						}
					}
				}
			}
			console.log(  'mode_wait_badge',$scope.mode_wait_badge );
			if( $scope.mode_wait_badge )
			{
				$scope.details.badges.push( data );
				$scope.pushBadge( data, false ); // send info to server
				$scope.mode_wait_badge = false;
				return;
			}
			$scope.lastlog_name = 'Inconnu';
			$scope.passages.unshift( { time: new Date(), badge: data, nom: '?', prenom: '?'  } );
		}
        
        $scope.validPassage = function( user, badge )
        {
			$scope.lastlog_errors = [];
			
			if( ! user.adhesion.paiement )
				$scope.lastlog_errors.push('Manque règlement');
			
			if( ! user.adhesion.certif )
				$scope.lastlog_errors.push('Manque certificat médical');
			
			if( ! user.adhesion.certif && ! user.adhesion.decharge )
				$scope.lastlog_errors.push('Remplissez une décharge de responsabilité');
			
			if( user.age < 18 && ! user.adhesion.auth_parent )
				$scope.lastlog_errors.push('Manque authorisation parentale');
			
			if( $scope.lastlog_errors.length == 0 )
				sounds['bip'].play();
			else
				sounds['bop'].play();
				
			$scope.lastlog_name = user.prenom+' '+user.nom;
			$scope.passages.unshift( { time: new Date(), badge: badge, nom: user.nom, prenom: user.prenom  } );
			$scope.pass( user._id, badge );
			
			$scope.mode_admin = ( user._id == 195 );
		}
        
        
        
		
		$scope.changeAdh = function( index )
		{
			$scope.mode_wait_badge = false;
			$scope.details = $scope.users[ index ];
			if( $scope.details.badges == undefined )
				$scope.details.badges = [];
			console.log( $scope.details );
		}
		
		$scope.pass = function( user_id, badge )
		{
			socket.emit( 'push', {  '_id': user_id  ,'type':'passage', value : badge, time: new Date() } );
			console.log( 'pass', user_id );
			
			
		}
		$scope.push = function( type )
		{
			socket.emit( 'push', {  '_id': $scope.details._id  ,'type':type, value : $scope.details.adhesion[ type ] } );
			console.log( type, $scope.details.adhesion[ type ] );
			socket.emit( 'save', $scope.users );
			console.log( "Save" );
			
		}
		$scope.pushBadge = function( badge_id, remove )
		{
			remove = remove || false;
			
			socket.emit( 'push', {  '_id': $scope.details._id  ,'type':( remove ? 'suppbadge':'badge' ), value : badge_id , time: new Date() } );
			console.log( ( remove ? 'suppBadge':'addBadge' ),badge_id );
			socket.emit( 'save', $scope.users );
			console.log( "Save" );
		
		}
		*/
        
    }
]);
